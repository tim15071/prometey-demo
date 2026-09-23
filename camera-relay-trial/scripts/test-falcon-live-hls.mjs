// Pure argument tests: importing the relay must not bind a port or start a child.
import assert from 'node:assert/strict';
import { join, resolve } from 'node:path';
import { mkdtemp, readdir, rm, unlink, writeFile } from 'node:fs/promises';
import { request } from 'node:http';
import { tmpdir } from 'node:os';
import { createRelayServer, parseLiveHlsArguments, pruneRelaySegments } from './falcon-live-hls.mjs';

const base = ['--input', resolve('synthetic.avi'), '--output', resolve('private-fixture'), '--ffmpeg', resolve('ffmpeg.exe')];
assert.equal(parseLiveHlsArguments(base).seconds, 180);
assert.equal(parseLiveHlsArguments(base).fps, 25);
assert.equal(parseLiveHlsArguments([...base, '--seconds', '300']).seconds, 300);
for (const duration of ['301', '3600', '3900']) {
  assert.throws(() => parseLiveHlsArguments([...base, '--seconds', duration]));
  const options = parseLiveHlsArguments([...base, '--seconds', duration, '--approved-hour-test', 'true']);
  assert.equal(options.seconds, Number(duration));
  assert.equal(options.approvedHourTest, true);
}
for (const args of [
  ['--seconds', '3901', '--approved-hour-test', 'true'],
  ['--seconds', '3600', '--approved-hour-test', 'false'],
  ['--seconds', '29'], ['--seconds', '1e3'], ['--seconds', '300', '--seconds', '3900'],
  ['--fps', '0'], ['--fps', '61'], ['--fps', '25.5'], ['--unknown', '1'],
]) assert.throws(() => parseLiveHlsArguments([...base, ...args]));
assert.equal(parseLiveHlsArguments([...base, '--fps', '30']).fps, 30);
assert.equal(parseLiveHlsArguments([...base, '--fps', '60']).fps, 60);
console.log('Finite HLS argument checks passed: ordinary 300s bound, explicit 3900s hour-test bound and verified FPS option.');

// Synthetic playlist text only. No camera, FFmpeg, media or external network.
const fixturePrefix = join(tmpdir(), 'falcon-playlist-test-');
const directory = await mkdtemp(fixturePrefix);
const playlistPath = join(directory, 'index.m3u8');
const short = '#EXTM3U\n#EXT-X-TARGETDURATION:2\n#EXT-X-MEDIA-SEQUENCE:1\n#EXTINF:2,\nchunk-000001.ts\n';
const long = short + '# synthetic padding '.repeat(500) + '\n';
let server;
try {
  for (const name of ['chunk-000001.ts', 'chunk-000002.ts', 'chunk-000003.ts', 'chunk-000010.ts', 'chunk-000020.ts', 'chunk-000000.ts.tmp', 'notes.txt']) await writeFile(join(directory, name), 'synthetic');
  await pruneRelaySegments(directory, Buffer.from(short.replace('chunk-000001.ts', 'chunk-000010.ts')), { unlinkFile: async path => {
    if (path.endsWith('chunk-000001.ts')) { const error = new Error('Synthetic temporary file lock'); error.code = 'EPERM'; throw error; }
    await unlink(path);
  } });
  assert.ok((await readdir(directory)).includes('chunk-000001.ts'), 'Temporary old-file lock defers deletion without rejecting fresh publication');
  await pruneRelaySegments(directory, Buffer.from(short.replace('chunk-000001.ts', 'chunk-000010.ts')));
  const retained = await readdir(directory);
  assert.ok(!retained.includes('chunk-000001.ts') && !retained.includes('chunk-000002.ts'));
  for (const name of ['chunk-000003.ts', 'chunk-000010.ts', 'chunk-000020.ts', 'chunk-000000.ts.tmp', 'notes.txt']) assert.ok(retained.includes(name), 'Preserve previous/current/future/temp/unrelated files');
  let clock = Date.now();
  server = createRelayServer({ output: directory, now: () => clock });
  await new Promise((ok, fail) => { server.once('error', fail); server.listen(0, '127.0.0.1', ok); });
  const url = `http://127.0.0.1:${server.address().port}/index.m3u8`;
  const publishUrl = `http://127.0.0.1:${server.address().port}/_publish/index.m3u8`;
  assert.equal((await fetch(url)).status, 503);
  await writeFile(playlistPath, 'Must never be served');
  assert.equal((await fetch(url)).status, 503, 'No disk fallback');
  const publish = async body => { const response = await fetch(publishUrl, { method: 'PUT', body, signal: AbortSignal.timeout(3000) }); assert.equal(response.status, 200); await response.text(); };
  await publish(short);
  let finish;
  const partial = new Promise((ok, fail) => {
    const req = request(publishUrl, { method: 'PUT' }, response => { response.resume(); response.on('end', () => response.statusCode === 200 ? ok() : fail(new Error('Partial publish failed'))); });
    req.on('error', fail); req.write(long.slice(0, 30)); finish = () => req.end(long.slice(30));
  });
  assert.equal(await (await fetch(url)).text(), short, 'Incomplete publication cannot replace the current snapshot');
  finish(); await partial;
  assert.equal(await (await fetch(url)).text(), long);
  const publisher = async () => { for (let i = 0; i < 80; i++) await publish(i % 2 ? short : long); };
  const reader = async () => { for (let i = 0; i < 25; i++) {
    const response = await fetch(url, { signal: AbortSignal.timeout(3000) });
    assert.equal(response.status, 200);
    const body = Buffer.from(await response.arrayBuffer());
    assert.equal(Number(response.headers.get('content-length')), body.length);
    assert.ok([short, long].includes(body.toString()), 'Response must contain one complete playlist version');
  } };
  await Promise.all([publisher(), reader(), reader(), reader(), reader()]);
  const head = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(3000) });
  assert.equal(head.status, 200); assert.equal((await head.text()).length, 0);
  assert.ok([Buffer.byteLength(short), Buffer.byteLength(long)].includes(Number(head.headers.get('content-length'))));
  const last = await (await fetch(url)).text();
  assert.equal((await fetch(publishUrl, { method: 'PUT', body: 'broken', signal: AbortSignal.timeout(3000) })).status, 400);
  let oversizedStatus = 0;
  try { oversizedStatus = (await fetch(publishUrl, { method: 'PUT', body: Buffer.alloc(65537), signal: AbortSignal.timeout(3000) })).status; } catch { /* Oversized body may have its socket closed. */ }
  assert.notEqual(oversizedStatus, 200);
  assert.equal(await (await fetch(url)).text(), last, 'Rejected publication cannot change valid snapshot');
  assert.equal((await fetch(url, { method: 'PUT', body: short })).status, 404);
  assert.equal((await fetch(publishUrl)).status, 404);
  clock += 20001;
  assert.equal((await fetch(url)).status, 503);
  console.log('Playlist snapshot regression passed: partial/atomic publication, 100 concurrent HTTP reads, exact Content-Length, HEAD, 64KiB bound, invalid path, no disk fallback and stale fail-closed.');
} finally {
  server?.closeAllConnections();
  if (server) await new Promise(ok => server.close(ok));
  if (!directory.startsWith(fixturePrefix)) throw new Error('Refusing cleanup outside synthetic fixture');
  await rm(directory, { recursive: true, force: true });
}
