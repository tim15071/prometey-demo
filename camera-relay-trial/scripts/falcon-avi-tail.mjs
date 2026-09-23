import { open, realpath } from 'node:fs/promises';
import { extname, isAbsolute, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

// Experimental: this offset is observed in one Falcon Eye AVI writer, not an AVI specification.
// The plugin writes the RIFF header on finalization. We consume its already-written chunks.
export class TailError extends Error {}

export class AviChunkParser {
  constructor({ maxChunkBytes = 8 * 1024 * 1024, chunkPadding = 0, dataOffset = 2048 } = {}) {
    if (!Number.isSafeInteger(maxChunkBytes) || maxChunkBytes < 4 || maxChunkBytes > 32 * 1024 * 1024) {
      throw new TailError('Invalid chunk size limit.');
    }
    this.maxChunkBytes = maxChunkBytes;
    if (chunkPadding !== 0 && chunkPadding !== 1) throw new TailError('Invalid chunk padding.');
    // This Falcon writer omits RIFF's usual odd-byte padding. Never guess/resynchronize.
    this.chunkPadding = chunkPadding;
    if (!Number.isSafeInteger(dataOffset) || dataOffset < 0) throw new TailError('Invalid data offset.');
    this.chunkOffset = dataOffset;
    this.pending = Buffer.alloc(0);
    this.ended = false;
    this.videoChunks = 0;
    this.audioChunks = 0;
  }

  push(data) {
    if (!Buffer.isBuffer(data)) throw new TailError('Expected binary input.');
    if (this.ended) return [];
    // Reads are bounded independently of the untrusted declared chunk length.
    if (data.length > 1024 * 1024) throw new TailError('Input read exceeds the parser limit.');
    this.pending = Buffer.concat([this.pending, data]);
    const output = [];
    while (this.pending.length >= 8) {
      const id = this.pending.toString('ascii', 0, 4);
      if (id === 'idx1') {
        this.ended = true;
        this.pending = Buffer.alloc(0);
        break;
      }
      // This writer does not pad individual chunks, but pads the final movi LIST to
      // an even file offset. Accept exactly one byte only before a complete idx1
      // header whose 16-byte entries match all consumed chunks. Never scan ahead.
      if ((this.chunkOffset & 1) && this.pending.toString('ascii', 1, 5) === 'idx1') {
        if (this.pending.length < 9) break;
        const indexLength = this.pending.readUInt32LE(5);
        if (indexLength !== (this.videoChunks + this.audioChunks) * 16) {
          throw new TailError('Terminal AVI padding has an inconsistent index length.');
        }
        this.ended = true;
        this.pending = Buffer.alloc(0);
        break;
      }
      if (id === 'RIFF') throw new TailError('Unexpected AVI rollover; a new source must be verified.');
      if (id !== '00dc' && id !== '01wb') throw new TailError('Unexpected AVI chunk; stopping without resynchronizing.');
      const length = this.pending.readUInt32LE(4);
      if (length > this.maxChunkBytes) throw new TailError('AVI chunk exceeds the size limit.');
      if (id === '00dc' && length < 4) throw new TailError('Empty or invalid video chunk.');
      const total = 8 + length + (this.chunkPadding ? length & 1 : 0);
      if (this.pending.length < total) break;
      if (id === '00dc') {
        const payload = this.pending.subarray(8, 8 + length);
        const prefix = payload[0] === 0 && payload[1] === 0
          ? payload[2] === 1 ? 3 : payload[2] === 0 && payload[3] === 1 ? 4 : 0 : 0;
        if (!prefix || payload.length <= prefix || (payload[prefix] & 0x80)
          || !(payload[prefix] & 0x1f) || (payload[prefix] & 0x1f) > 23) {
          throw new TailError('Video chunk is not supported H.264 Annex B.');
        }
        output.push(payload);
        this.videoChunks += 1;
      } else {
        this.audioChunks += 1;
      }
      this.pending = this.pending.subarray(total);
      this.chunkOffset += total;
    }
    return output;
  }
}

function integer(value, name, min, max) {
  if (!/^\d+$/.test(String(value))) throw new TailError(`Invalid ${name}.`);
  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < min || number > max) throw new TailError(`Invalid ${name}.`);
  return number;
}

export function parseArguments(args) {
  const values = new Map();
  const allowed = new Set(['--input', '--data-offset', '--chunk-padding', '--max-chunk-bytes', '--idle-ms', '--max-seconds', '--poll-ms']);
  for (let i = 0; i < args.length; i += 2) {
    if (!allowed.has(args[i]) || values.has(args[i]) || args[i + 1] === undefined) {
      throw new TailError('Use --input <local AVI> and optional --data-offset, --chunk-padding, --max-chunk-bytes, --idle-ms, --max-seconds, --poll-ms.');
    }
    values.set(args[i], args[i + 1]);
  }
  const input = values.get('--input');
  if (!isLocalPath(input) || extname(input).toLowerCase() !== '.avi') throw new TailError('Input must be an absolute local AVI file path, not a URL or network share.');
  return {
    input,
    dataOffset: integer(values.get('--data-offset') ?? 2048, 'data offset', 0, 1024 * 1024 * 1024),
    chunkPadding: integer(values.get('--chunk-padding') ?? 0, 'chunk padding', 0, 1),
    maxChunkBytes: integer(values.get('--max-chunk-bytes') ?? 8 * 1024 * 1024, 'chunk limit', 4, 32 * 1024 * 1024),
    idleMs: integer(values.get('--idle-ms') ?? 15000, 'idle deadline', 100, 300000),
    maxSeconds: integer(values.get('--max-seconds') ?? 120, 'wall deadline', 1, 86400),
    pollMs: integer(values.get('--poll-ms') ?? 100, 'poll interval', 1, 2000),
  };
}

function isLocalPath(path) {
  return typeof path === 'string' && path.length > 0 && !/[\u0000-\u001f]/u.test(path)
    && isAbsolute(path) && !/^(?:\\\\|\/\/)/u.test(path)
    && !/^[a-z][a-z\d+.-]*:/iu.test(path.replace(/^[a-z]:[\\/]/iu, ''));
}

function writeWithBackpressure(stream, data, signal) {
  return new Promise((resolveWrite, rejectWrite) => {
    if (signal.aborted) return rejectWrite(signal.reason);
    const cleanup = () => signal.removeEventListener('abort', onAbort);
    const onAbort = () => { cleanup(); rejectWrite(signal.reason); };
    signal.addEventListener('abort', onAbort, { once: true });
    // Waiting for the write callback keeps buffered output bounded, including slow consumers.
    stream.write(data, (error) => { cleanup(); error ? rejectWrite(error) : resolveWrite(); });
  });
}

export async function tailAvi(options, { output = process.stdout, signal: externalSignal } = {}) {
  const source = await realpath(options.input);
  if (!isLocalPath(source)) throw new TailError('Resolved input is not a local file.');
  const handle = await open(source, 'r');
  const controller = new AbortController();
  const abort = () => controller.abort(externalSignal.reason ?? new TailError('Stopped.'));
  const timer = setTimeout(() => controller.abort(new TailError('Wall deadline reached.')), options.maxSeconds * 1000);
  if (externalSignal?.aborted) abort();
  else externalSignal?.addEventListener('abort', abort, { once: true });
  const parser = new AviChunkParser(options);
  const buffer = Buffer.alloc(64 * 1024);
  let position = options.dataOffset;
  let progressedAt = performance.now();
  let bytes = 0;
  let observedSize = 0;
  try {
    if (!(await handle.stat()).isFile()) throw new TailError('Input is not a regular file.');
    while (!parser.ended) {
      controller.signal.throwIfAborted();
      // Query the open handle. A directory listing can show stale size while this writer is open.
      const size = (await handle.stat()).size;
      if (size < observedSize) throw new TailError('Source was truncated; automatic rollover is disabled.');
      observedSize = size;
      const { bytesRead } = await handle.read(buffer, 0, buffer.length, position);
      if (bytesRead > 0) {
        position += bytesRead;
        const chunks = parser.push(buffer.subarray(0, bytesRead));
        for (const payload of chunks) {
          await writeWithBackpressure(output, payload, controller.signal);
          bytes += payload.length;
        }
        if (chunks.length > 0) progressedAt = performance.now();
      } else {
        await delay(options.pollMs, undefined, { signal: controller.signal });
      }
      if (!parser.ended && performance.now() - progressedAt >= options.idleMs) {
        throw new TailError('No complete video chunk before the idle deadline.');
      }
    }
    if (!parser.videoChunks) throw new TailError('No video chunks were extracted.');
    return { videoChunks: parser.videoChunks, audioChunks: parser.audioChunks, bytes, end: 'idx1' };
  } finally {
    clearTimeout(timer);
    externalSignal?.removeEventListener('abort', abort);
    await handle.close();
  }
}

async function main() {
  const controller = new AbortController();
  const stop = () => controller.abort(new TailError('Stopped by signal.'));
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
  process.stdout.on('error', (error) => controller.abort(error));
  try {
    const result = await tailAvi(parseArguments(process.argv.slice(2)), { signal: controller.signal });
    process.stderr.write(`Extracted ${result.videoChunks} video chunks (${result.bytes} bytes); AVI index reached.\n`);
  } catch (error) {
    // Never echo filesystem paths, filenames, or stream contents into diagnostic logs.
    process.stderr.write(`${error instanceof TailError ? error.message : 'Local AVI read or output failed.'}\n`);
    process.exitCode = 1;
    process.stdout.destroy();
  } finally {
    process.removeListener('SIGINT', stop);
    process.removeListener('SIGTERM', stop);
    // An interrupted blocked pipe must not keep the finite diagnostic process alive.
    if (controller.signal.aborted) process.stdout.destroy();
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
