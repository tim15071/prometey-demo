// Finite, loopback-only HLS observation. Does not start or stop camera recording.
import { open, realpath } from 'node:fs/promises';
import { basename, dirname, extname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

export const RELAY_URL = 'http://127.0.0.1:8898/index.m3u8';
export const SAMPLE_INTERVAL_MS = 2000;
export const REQUEST_DEADLINE_MS = 1500;
const MAX_PLAYLIST_BYTES = 64 * 1024;
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

class ProbeError extends Error {
  constructor(code) { super(code); this.code = code; }
}

function outside(root, path) {
  const rel = relative(root, path);
  return rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel);
}

function localAbsolute(path) {
  return typeof path === 'string' && isAbsolute(path) && !/^(?:\\\\|\/\/)/u.test(path)
    && !/[\u0000-\u001f]/u.test(path);
}

export function parseArguments(args) {
  const options = new Map();
  for (let i = 0; i < args.length; i += 2) {
    if (!['--output', '--seconds'].includes(args[i]) || options.has(args[i]) || !args[i + 1]) {
      throw new ProbeError('Expected --output <absolute-private.json> [--seconds 30..300].');
    }
    options.set(args[i], args[i + 1]);
  }
  const output = options.get('--output');
  if (!localAbsolute(output) || extname(output).toLowerCase() !== '.json'
    || /[<>:"|?*\u0000-\u001f]/u.test(basename(output)) || /[. ]$/u.test(basename(output))
    || /:/u.test(output.replace(/^[a-z]:[\\/]/iu, ''))
    || /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/iu.test(basename(output))) {
    throw new ProbeError('Output must be an absolute local JSON file.');
  }
  const rawSeconds = options.get('--seconds') ?? '180';
  const seconds = Number(rawSeconds);
  if (!/^\d+$/u.test(rawSeconds) || !Number.isInteger(seconds) || seconds < 30 || seconds > 300) {
    throw new ProbeError('Duration must be 30–300 seconds.');
  }
  return { output, seconds };
}

// Reserve once, before any request. An existing file/symlink is never replaced.
// Both lexical and real parent locations must be outside the application checkout.
export async function reservePrivateOutput(path, repositoryRoot = ROOT) {
  parseArguments(['--output', path]);
  const root = resolve(repositoryRoot);
  if (!outside(root, resolve(path))) throw new ProbeError('Output must be outside the repository.');
  const realRoot = await realpath(root);
  const parent = await realpath(dirname(path));
  if (!localAbsolute(parent) || !outside(realRoot, parent)) throw new ProbeError('Resolved output must be outside the repository.');
  return open(join(parent, basename(path)), 'wx', 0o600);
}

export function parsePlaylist(text) {
  if (typeof text !== 'string' || Buffer.byteLength(text) > MAX_PLAYLIST_BYTES) throw new ProbeError('playlist_too_large');
  const lines = text.replace(/^\uFEFF/u, '').trim().split(/\r?\n/u).map(line => line.trim());
  if (lines[0] !== '#EXTM3U') throw new ProbeError('invalid_playlist');
  const sequences = lines.filter(line => line.startsWith('#EXT-X-MEDIA-SEQUENCE:'));
  const targets = lines.filter(line => line.startsWith('#EXT-X-TARGETDURATION:'));
  if (sequences.length !== 1 || targets.length !== 1) throw new ProbeError('invalid_playlist');
  const rawSequence = sequences[0].slice('#EXT-X-MEDIA-SEQUENCE:'.length);
  const rawTarget = targets[0].slice('#EXT-X-TARGETDURATION:'.length);
  const mediaSequence = Number(rawSequence);
  const targetDurationSeconds = Number(rawTarget);
  if (!/^\d+$/u.test(rawSequence) || !Number.isSafeInteger(mediaSequence)
    || !/^\d+$/u.test(rawTarget) || !Number.isInteger(targetDurationSeconds)
    || targetDurationSeconds < 1 || targetDurationSeconds > 120) throw new ProbeError('invalid_playlist');
  let segmentCount = 0;
  let pendingDuration = false;
  for (const line of lines.slice(1)) {
    if (line.startsWith('#EXTINF:')) {
      const duration = Number(line.slice(8).split(',')[0]);
      if (pendingDuration || !Number.isFinite(duration) || duration <= 0 || duration > 120) throw new ProbeError('invalid_playlist');
      pendingDuration = true;
    } else if (line && !line.startsWith('#')) {
      // Never request or retain arbitrary media URLs from a response.
      if (!pendingDuration || !/^chunk-\d+\.ts$/u.test(line)) throw new ProbeError('unexpected_segment_uri');
      segmentCount += 1;
      pendingDuration = false;
    }
  }
  if (pendingDuration || !segmentCount || !Number.isSafeInteger(mediaSequence + segmentCount - 1)) throw new ProbeError('invalid_playlist');
  return {
    mediaSequence, segmentCount, lastSegmentSequence: mediaSequence + segmentCount - 1,
    targetDurationSeconds, ended: lines.includes('#EXT-X-ENDLIST'),
  };
}

export async function fetchPlaylistSample({ fetchImpl = fetch, timeoutMs = REQUEST_DEADLINE_MS, signal } = {}) {
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > REQUEST_DEADLINE_MS) throw new ProbeError('Invalid request deadline.');
  const controller = new AbortController();
  const onAbort = () => controller.abort(new ProbeError('interrupted'));
  if (signal?.aborted) onAbort(); else signal?.addEventListener('abort', onAbort, { once: true });
  let abortListener;
  const deadline = new Promise((_, reject) => {
    abortListener = () => reject(controller.signal.reason ?? new ProbeError('request_timeout'));
    if (controller.signal.aborted) abortListener(); else controller.signal.addEventListener('abort', abortListener, { once: true });
  });
  const timer = setTimeout(() => controller.abort(new ProbeError('request_timeout')), timeoutMs);
  try {
    const request = (async () => {
      const response = await fetchImpl(RELAY_URL, {
        redirect: 'error', credentials: 'omit', cache: 'no-store', signal: controller.signal,
      });
      if ((response.url && response.url !== RELAY_URL) || response.redirected) throw new ProbeError('unexpected_response_url');
      if (response.status !== 200) {
        void response.body?.cancel().catch(() => {});
        return { ok: false, reason: 'http_error', httpStatus: response.status };
      }
      if (!response.body) throw new ProbeError('empty_response');
      const reader = response.body.getReader();
      const chunks = [];
      let size = 0;
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          size += value.byteLength;
          if (size > MAX_PLAYLIST_BYTES) throw new ProbeError('playlist_too_large');
          chunks.push(Buffer.from(value));
        }
      } finally { void reader.cancel().catch(() => {}); }
      const playlist = parsePlaylist(Buffer.concat(chunks).toString('utf8'));
      return { ok: true, ...playlist };
    })();
    return await Promise.race([request, deadline]);
  } catch (error) {
    return { ok: false, reason: error instanceof ProbeError ? error.code : 'request_failed' };
  } finally {
    clearTimeout(timer);
    controller.signal.removeEventListener('abort', abortListener);
    signal?.removeEventListener('abort', onAbort);
  }
}

export function analyzeSamples(samples, { requestedMs, completed, intervalMs = SAMPLE_INTERVAL_MS, freezeMs = 10000 } = {}) {
  const events = [];
  let previous;
  let previousSuccess;
  let lastProgressAt;
  let frozen = false;
  let progressionObservations = 0;
  let unavailableSamples = 0;
  let successfulSamples = 0;
  let sequenceResets = 0;
  let freezeEpisodes = 0;
  let observationGaps = 0;
  let endedSamples = 0;
  for (const sample of samples) {
    if (!Number.isFinite(sample.elapsedMs) || sample.elapsedMs < 0 || (previous && sample.elapsedMs < previous.elapsedMs)) throw new ProbeError('Samples must have monotonic timestamps.');
    if (previous && sample.elapsedMs - previous.elapsedMs > intervalMs * 3) {
      observationGaps += 1;
      events.push({ type: 'observation_gap', fromMs: previous.elapsedMs, toMs: sample.elapsedMs });
    }
    previous = sample;
    if (!sample.ok) {
      unavailableSamples += 1;
      events.push({ type: 'unavailable', atMs: sample.elapsedMs, reason: sample.reason });
      continue;
    }
    successfulSamples += 1;
    if (sample.ended) {
      endedSamples += 1;
      events.push({ type: 'playlist_ended', atMs: sample.elapsedMs });
    }
    if (!previousSuccess) lastProgressAt = sample.elapsedMs;
    else if (sample.mediaSequence < previousSuccess.mediaSequence || sample.lastSegmentSequence < previousSuccess.lastSegmentSequence) {
      sequenceResets += 1;
      events.push({ type: 'sequence_reset', atMs: sample.elapsedMs });
      lastProgressAt = sample.elapsedMs;
      frozen = false;
    } else if (sample.lastSegmentSequence > previousSuccess.lastSegmentSequence) {
      progressionObservations += 1;
      if (frozen) events.push({ type: 'progress_resumed', atMs: sample.elapsedMs });
      lastProgressAt = sample.elapsedMs;
      frozen = false;
    } else if (!frozen && sample.elapsedMs - lastProgressAt >= freezeMs) {
      freezeEpisodes += 1;
      frozen = true;
      events.push({ type: 'no_playlist_progress', fromMs: lastProgressAt, detectedAtMs: sample.elapsedMs });
    }
    previousSuccess = sample;
  }
  const observedSpanMs = samples.length > 1 ? samples.at(-1).elapsedMs - samples[0].elapsedMs : 0;
  const coversWindow = Number.isFinite(requestedMs) && observedSpanMs >= requestedMs - intervalMs * 2;
  let result = 'playlist_progress_observed';
  if (!completed || !coversWindow) result = 'incomplete_observation';
  else if (!successfulSamples) result = 'relay_unavailable';
  else if (unavailableSamples || sequenceResets || freezeEpisodes || observationGaps || endedSamples) result = 'issues_detected';
  else if (progressionObservations < 2) result = 'insufficient_progress';
  return {
    result, observedSpanMs, successfulSamples, unavailableSamples, progressionObservations,
    sequenceResets, freezeEpisodes, observationGaps, endedSamples, freezeThresholdMs: freezeMs, events,
  };
}

export async function runProbe({ seconds, signal }) {
  if (!Number.isInteger(seconds) || seconds < 30 || seconds > 300) throw new ProbeError('Duration must be 30–300 seconds.');
  const startedAt = new Date().toISOString();
  const started = performance.now();
  const requestedMs = seconds * 1000;
  const samples = [];
  while (!signal?.aborted && performance.now() - started < requestedMs) {
    const sampleStarted = performance.now();
    const remaining = requestedMs - (sampleStarted - started);
    if (remaining < 1) break;
    const sample = await fetchPlaylistSample({ signal, timeoutMs: Math.min(REQUEST_DEADLINE_MS, Math.floor(remaining)) });
    samples.push({ at: new Date().toISOString(), elapsedMs: Math.round(performance.now() - started), ...sample });
    const wait = Math.min(SAMPLE_INTERVAL_MS - (performance.now() - sampleStarted), requestedMs - (performance.now() - started));
    if (wait > 0) { try { await delay(wait, undefined, { signal }); } catch { break; } }
  }
  const completed = !signal?.aborted && performance.now() - started >= requestedMs - 1;
  return {
    schemaVersion: 1, source: RELAY_URL, startedAt, finishedAt: new Date().toISOString(),
    requestedSeconds: seconds, completed, sampleIntervalMs: SAMPLE_INTERVAL_MS, requestDeadlineMs: REQUEST_DEADLINE_MS,
    summary: analyzeSamples(samples, { requestedMs, completed }), samples,
    limitations: [
      'Measures only progression of the local relay playlist, not segment decodability, camera motion/freshness, or public delivery.',
      'Does not start or stop camera recording, and does not configure server recovery or autostart.',
      'RDP disconnection is not Windows sign-out. Missing observations or forced process termination are not success.',
    ],
  };
}

async function main() {
  let output;
  const controller = new AbortController();
  const stop = () => controller.abort();
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
  try {
    const options = parseArguments(process.argv.slice(2));
    output = await reservePrivateOutput(options.output);
    const report = await runProbe({ seconds: options.seconds, signal: controller.signal });
    await output.writeFile(`${JSON.stringify(report, null, 2)}\n`, 'utf8');
    await output.sync();
    process.exitCode = report.summary.result === 'playlist_progress_observed' ? 0 : 2;
    console.error(`Probe finished: ${report.summary.result}. Report written to the private JSON file.`);
  } catch (error) {
    console.error(error instanceof ProbeError ? error.message : 'Probe failed; verify private output path, permissions, and that the file does not exist.');
    process.exitCode = 1;
  } finally {
    await output?.close();
    process.removeListener('SIGINT', stop);
    process.removeListener('SIGTERM', stop);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
