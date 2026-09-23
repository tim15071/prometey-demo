import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  RELAY_URL, parseArguments, parsePlaylist, fetchPlaylistSample, analyzeSamples, reservePrivateOutput,
} from './probe-camera-continuity.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const playlist = (sequence, count = 6, ended = false) => [
  '#EXTM3U', '#EXT-X-VERSION:3', '#EXT-X-TARGETDURATION:2', `#EXT-X-MEDIA-SEQUENCE:${sequence}`,
  ...Array.from({ length: count }, (_, i) => `#EXTINF:2.000000,\nchunk-${String(sequence + i).padStart(6, '0')}.ts`),
  ...(ended ? ['#EXT-X-ENDLIST'] : []), '',
].join('\n');
const success = (elapsedMs, sequence, count = 6) => ({ elapsedMs, ok: true, ...parsePlaylist(playlist(sequence, count)) });
const windowOptions = { requestedMs: 30000, completed: true };
const increasing = Array.from({ length: 15 }, (_, i) => success(i * 2000, i));
assert.equal(analyzeSamples(increasing, windowOptions).result, 'playlist_progress_observed');
assert.equal(analyzeSamples(increasing, windowOptions).progressionObservations, 14);

// Successful HTTP and a final/static frame cannot pass a continuity check.
const frozen = increasing.map(sample => success(sample.elapsedMs, 0));
const frozenReport = analyzeSamples(frozen, windowOptions);
assert.equal(frozenReport.result, 'issues_detected');
assert.equal(frozenReport.freezeEpisodes, 1);
assert.equal(frozenReport.progressionObservations, 0);
assert.deepEqual(frozenReport.events[0], { type: 'no_playlist_progress', fromMs: 0, detectedAtMs: 10000 });

const recovered = increasing.map((sample, i) => success(sample.elapsedMs, i < 7 ? 0 : i));
assert.equal(analyzeSamples(recovered, windowOptions).result, 'issues_detected');
assert.ok(analyzeSamples(recovered, windowOptions).events.some(event => event.type === 'progress_resumed'));

const oneError = increasing.map((sample, i) => i === 5 ? { elapsedMs: sample.elapsedMs, ok: false, reason: 'request_timeout' } : sample);
assert.equal(analyzeSamples(oneError, windowOptions).unavailableSamples, 1);
assert.equal(analyzeSamples(oneError, windowOptions).result, 'issues_detected');
const unavailable = increasing.map(sample => ({ elapsedMs: sample.elapsedMs, ok: false, reason: 'http_error', httpStatus: 503 }));
assert.equal(analyzeSamples(unavailable, windowOptions).result, 'relay_unavailable');

const reset = increasing.map((sample, i) => success(sample.elapsedMs, i < 7 ? i + 100 : i));
assert.equal(analyzeSamples(reset, windowOptions).sequenceResets, 1);
assert.equal(analyzeSamples(reset, windowOptions).result, 'issues_detected');
assert.equal(analyzeSamples(increasing.filter((_, i) => i < 4 || i > 8), windowOptions).observationGaps, 1);
assert.equal(analyzeSamples(increasing, { ...windowOptions, completed: false }).result, 'incomplete_observation');
assert.equal(analyzeSamples(increasing.slice(0, 4), windowOptions).result, 'incomplete_observation');
assert.equal(analyzeSamples(increasing.map(sample => ({ ...sample, ended: true })), windowOptions).result, 'issues_detected');
assert.throws(() => analyzeSamples([success(2000, 1), success(1000, 2)], windowOptions), /monotonic/);

// A growing initial playlist can advance its last segment before MEDIA-SEQUENCE changes.
const initial = [success(0, 0, 1), success(2000, 0, 2), success(4000, 0, 3)];
assert.equal(analyzeSamples(initial, { requestedMs: 4000, completed: true }).progressionObservations, 2);
assert.equal(analyzeSamples([success(0, 0)], { requestedMs: 0, completed: true }).result, 'insufficient_progress');

assert.equal(parsePlaylist(playlist(0)).lastSegmentSequence, 5);
assert.equal(parsePlaylist(playlist(999, 1, true)).ended, true);
for (const text of [
  'not a playlist', playlist(-1), playlist(0).replace('#EXTINF:2.000000,', '#EXTINF:NaN,'),
  playlist(0).replace('chunk-000000.ts', 'https://remote.example/stream.ts'),
  playlist(0).replace('chunk-000000.ts', '../private.ts'),
  playlist(0).replace('chunk-000000.ts', '//remote.example/stream.ts'),
  playlist(0).replace('#EXT-X-MEDIA-SEQUENCE:0', '#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-MEDIA-SEQUENCE:1'),
  playlist(0).replace('#EXT-X-TARGETDURATION:2', '#EXT-X-TARGETDURATION:0'),
  playlist(Number.MAX_SAFE_INTEGER), `${playlist(0)}#EXTINF:2,`, 'x'.repeat(65537),
]) assert.throws(() => parsePlaylist(text));

let observedRequest;
assert.deepEqual(await fetchPlaylistSample({ fetchImpl: async (url, options) => {
  observedRequest = { url, options };
  return new Response(playlist(12));
} }), { ok: true, ...parsePlaylist(playlist(12)) });
assert.equal(observedRequest.url, RELAY_URL);
assert.equal(observedRequest.options.redirect, 'error');
assert.equal(observedRequest.options.credentials, 'omit');
assert.equal(observedRequest.options.cache, 'no-store');
assert.equal((await fetchPlaylistSample({ fetchImpl: async () => new Response('', { status: 503 }) })).reason, 'http_error');
assert.equal((await fetchPlaylistSample({ fetchImpl: async () => new Response('', { status: 302, headers: { Location: 'https://remote.example/' } }) })).httpStatus, 302);
assert.equal((await fetchPlaylistSample({ fetchImpl: async () => ({ url: 'https://remote.example/', status: 200 }) })).reason, 'unexpected_response_url');
assert.equal((await fetchPlaylistSample({ fetchImpl: async () => { throw new Error('sensitive arbitrary message'); } })).reason, 'request_failed');
assert.equal((await fetchPlaylistSample({ fetchImpl: async () => new Response('x'.repeat(65537)) })).reason, 'playlist_too_large');

const timeoutStarted = performance.now();
assert.equal((await fetchPlaylistSample({ fetchImpl: () => new Promise(() => {}), timeoutMs: 25 })).reason, 'request_timeout');
assert.ok(performance.now() - timeoutStarted < 1000);
const neverEndingBody = new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode('#EXTM3U\n')); } });
assert.equal((await fetchPlaylistSample({ fetchImpl: async () => new Response(neverEndingBody), timeoutMs: 25 })).reason, 'request_timeout');
const abort = new AbortController();
abort.abort();
assert.equal((await fetchPlaylistSample({ fetchImpl: () => new Promise(() => {}), signal: abort.signal })).reason, 'interrupted');

const directory = await mkdtemp(join(tmpdir(), 'camera-continuity-test-'));
try {
  const report = join(directory, 'report.json');
  assert.deepEqual(parseArguments(['--output', report]), { output: report, seconds: 180 });
  for (const args of [
    ['--output', 'relative.json'], ['--output', 'https://example.org/report.json'],
    ['--output', '//server/share/report.json'], ['--output', '\\\\server\\share\\report.json'],
    ['--output', report, '--url', RELAY_URL], ['--output', report, '--seconds', '29'],
    ['--output', report, '--seconds', '301'], ['--output', report, '--seconds', '1e2'],
    ['--output', report, '--output', report], ['--output', join(directory, 'CON.json')],
    ['--output', join(directory, 'file:secret.json')],
  ]) assert.throws(() => parseArguments(args));
  await assert.rejects(reservePrivateOutput(join(root, 'forbidden-test-report.json')), /outside/);
  await writeFile(report, 'keep existing');
  await assert.rejects(reservePrivateOutput(report));
  assert.equal(await readFile(report, 'utf8'), 'keep existing');
  const valid = await reservePrivateOutput(join(directory, 'private.json'));
  await valid.writeFile('{"test":true}\n');
  await valid.close();
  assert.deepEqual(JSON.parse(await readFile(join(directory, 'private.json'), 'utf8')), { test: true });

  // Windows junctions require no elevation and exercise the resolved-parent guard.
  const redirected = join(directory, 'into-repo');
  await symlink(root, redirected, process.platform === 'win32' ? 'junction' : 'dir');
  await assert.rejects(reservePrivateOutput(join(redirected, 'must-not-exist.json')), /outside/);
} finally {
  const rel = relative(resolve(tmpdir()), resolve(directory));
  assert.ok(rel && rel !== '..' && !rel.startsWith(`..${sep}`) && !rel.includes(sep));
  assert.ok(rel.startsWith('camera-continuity-test-'));
  await rm(directory, { recursive: true, force: true });
}
console.log('Camera continuity probe tests passed (no camera or network requests).');
