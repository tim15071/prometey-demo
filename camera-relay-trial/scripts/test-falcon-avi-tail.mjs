import assert from 'node:assert/strict';
import { AviChunkParser, parseArguments, tailAvi } from './falcon-avi-tail.mjs';
import { resolve, join } from 'node:path';
import { mkdtemp, writeFile, appendFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { Writable } from 'node:stream';
import { setTimeout as delay } from 'node:timers/promises';

function chunk(id, data, declaredSize = data.length) {
  const header = Buffer.alloc(8);
  header.write(id, 0, 'ascii');
  header.writeUInt32LE(declaredSize, 4);
  return Buffer.concat([header, data, data.length & 1 ? Buffer.from([0]) : Buffer.alloc(0)]);
}
const videoA = Buffer.from([0, 0, 0, 1, 0x67, 0x4d, 0, 0x33, 5]);
const videoB = Buffer.from([0, 0, 1, 0x65, 8, 9]);
const input = Buffer.concat([chunk('00dc', videoA), chunk('01wb', Buffer.from([1, 2, 3])), chunk('00dc', videoB), chunk('idx1', Buffer.alloc(16))]);
const parser = new AviChunkParser({ chunkPadding: 1 });
const output = [];
for (const byte of input) output.push(...parser.push(Buffer.from([byte])));
assert.deepEqual(Buffer.concat(output), Buffer.concat([videoA, videoB]));
assert.equal(parser.videoChunks, 2);
assert.equal(parser.audioChunks, 1);
assert.equal(parser.ended, true);
assert.deepEqual(parser.push(Buffer.from('ignored after index')), []);

const partial = new AviChunkParser({ chunkPadding: 1 });
const single = chunk('00dc', videoA);
assert.deepEqual(partial.push(single.subarray(0, 10)), []);
assert.deepEqual(partial.push(single.subarray(10, single.length - 1)), []); // Odd-length chunk requires its padding byte.
assert.deepEqual(partial.push(single.subarray(single.length - 1)), [videoA]);

const unpadded = new AviChunkParser();
const unpaddedBytes = Buffer.concat([single.subarray(0, single.length - 1), chunk('00dc', videoB), chunk('idx1', Buffer.alloc(0))]);
const unpaddedOutput = [];
for (let offset = 0; offset < unpaddedBytes.length; offset += 3) unpaddedOutput.push(...unpadded.push(unpaddedBytes.subarray(offset, offset + 3)));
assert.deepEqual(Buffer.concat(unpaddedOutput), Buffer.concat([videoA, videoB]));
assert.equal(unpadded.ended, true);

// Observed Falcon writer: unpadded odd-length video, then one final LIST pad byte
// (0x30 in the real recording) followed by the index at an even absolute offset.
const terminalPad = new AviChunkParser();
assert.deepEqual(terminalPad.push(single.subarray(0, single.length - 1)), [videoA]);
const paddedIndex = Buffer.concat([Buffer.from([0x30]), chunk('idx1', Buffer.alloc(0), 16)]);
assert.deepEqual(terminalPad.push(paddedIndex.subarray(0, 1)), []);
assert.equal(terminalPad.ended, false);
assert.deepEqual(terminalPad.push(paddedIndex.subarray(1, 8)), []);
assert.equal(terminalPad.ended, false); // Do not misclassify a fragmented nine-byte terminal header.
assert.deepEqual(terminalPad.push(paddedIndex.subarray(8)), []);
assert.equal(terminalPad.ended, true);

const wrongAlignment = new AviChunkParser({ dataOffset: 2049 });
wrongAlignment.push(single.subarray(0, single.length - 1));
assert.throws(() => wrongAlignment.push(paddedIndex), /Unexpected AVI chunk/);
const wrongIndex = new AviChunkParser();
wrongIndex.push(single.subarray(0, single.length - 1));
assert.throws(() => wrongIndex.push(Buffer.concat([Buffer.from([0x30]), chunk('idx1', Buffer.alloc(0), 32)])), /inconsistent index/);
const interiorPad = new AviChunkParser();
interiorPad.push(single.subarray(0, single.length - 1));
assert.throws(() => interiorPad.push(Buffer.concat([Buffer.from([0x30]), chunk('00dc', videoB)])), /Unexpected AVI chunk/);

assert.throws(() => new AviChunkParser({ maxChunkBytes: 16 }).push(chunk('00dc', Buffer.alloc(0), 17)), /size limit/);
assert.throws(() => new AviChunkParser().push(chunk('00dc', Buffer.alloc(0), 0xffffffff)), /size limit/);
assert.throws(() => new AviChunkParser().push(chunk('00dc', Buffer.from([1, 2, 3, 4]))), /Annex B/);
assert.throws(() => new AviChunkParser().push(chunk('00dc', Buffer.from([0, 0, 1, 0xff]))), /Annex B/);
assert.throws(() => new AviChunkParser().push(chunk('00db', videoA)), /Unexpected AVI chunk/);
assert.throws(() => new AviChunkParser().push(chunk('RIFF', Buffer.alloc(0))), /rollover/);
assert.throws(() => new AviChunkParser().push(Buffer.alloc(1024 * 1024 + 1)), /read exceeds/);
const endOnly = new AviChunkParser();
assert.deepEqual(endOnly.push(chunk('idx1', Buffer.alloc(0), 0xffffffff)), []);
assert.equal(endOnly.ended, true); // Index size is irrelevant: it is never buffered or emitted.
assert.equal(parseArguments(['--input', resolve('fixture.avi')]).maxSeconds, 120);
for (const bad of [
  ['--input', 'https://example.org/video.avi'],
  ['--input', '//server/share/video.avi'],
  ['--input', '\\\\server\\share\\video.avi'],
  ['--input', 'relative.avi'],
  ['--input', resolve('fixture.avi'), '--max-seconds', '0'],
  ['--input', resolve('fixture.avi'), '--data-offset', '-1'],
  ['--input', resolve('fixture.avi'), '--max-chunk-bytes', '9999999999'],
  ['--input', resolve('fixture.avi'), '--input', resolve('other.avi')],
]) assert.throws(() => parseArguments(bad));

const directory = await mkdtemp(join(tmpdir(), 'falcon-tail-test-'));
try {
  const file = join(directory, 'growing.avi');
  await writeFile(file, Buffer.concat([Buffer.alloc(2048), unpaddedBytes.subarray(0, 7)]));
  const collected = [];
  const sink = new Writable({ write(data, encoding, callback) { collected.push(Buffer.from(data)); setTimeout(callback, 5); } });
  const options = parseArguments(['--input', file, '--idle-ms', '1000', '--max-seconds', '2', '--poll-ms', '5']);
  const reader = tailAvi(options, { output: sink });
  await delay(20);
  await appendFile(file, unpaddedBytes.subarray(7, 19));
  await delay(20);
  await appendFile(file, unpaddedBytes.subarray(19));
  const result = await reader;
  assert.deepEqual(Buffer.concat(collected), Buffer.concat([videoA, videoB]));
  assert.equal(result.videoChunks, 2);
  sink.destroy();

  const empty = join(directory, 'idle.avi');
  await writeFile(empty, Buffer.alloc(2048));
  await assert.rejects(tailAvi(parseArguments(['--input', empty, '--idle-ms', '100', '--poll-ms', '5']), { output: new Writable({ write(data, encoding, done) { done(); } }) }), /idle deadline/);

  const blocked = new Writable({ write() { /* Intentionally blocked downstream consumer. */ } });
  const startedAt = performance.now();
  await assert.rejects(tailAvi({ ...options, maxSeconds: 1 }, { output: blocked }), /Wall deadline/);
  assert.ok(performance.now() - startedAt < 2500, 'Blocked output obeys the independent wall deadline.');
  blocked.destroy();
} finally {
  // Only delete this test's fresh mkdtemp directory, never any camera files.
  await rm(directory, { recursive: true, force: true });
}
console.log('Falcon AVI checks passed: partial growing writes, padding modes, audio omission, H.264 validation, allocation limits, index/rollover handling, local paths, idle deadline and blocked-output cancellation.');
