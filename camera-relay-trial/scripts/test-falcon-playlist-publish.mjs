// Optional real FFmpeg regression using only a generated test pattern, never a camera.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, readdir, rm } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { tmpdir } from 'node:os';
import { setTimeout as delay } from 'node:timers/promises';
import { createRelayServer } from './falcon-live-hls.mjs';
import { parsePlaylist } from './probe-camera-continuity.mjs';

const executable = process.env.FALCON_TEST_FFMPEG;
if (!executable || !isAbsolute(executable)) throw new Error('Set FALCON_TEST_FFMPEG to a verified local FFmpeg executable.');
const prefix = join(tmpdir(), 'falcon-publish-test-');
const output = await mkdtemp(prefix);
const server = createRelayServer({ output });
let child;
try {
  await new Promise((ok, fail) => { server.once('error', fail); server.listen(0, '127.0.0.1', ok); });
  const base = `http://127.0.0.1:${server.address().port}`;
  child = spawn(executable, [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-re', '-f', 'lavfi', '-i', 'testsrc2=size=320x180:rate=25',
    '-t', '32', '-an', '-c:v', 'libx264', '-preset', 'ultrafast', '-g', '25', '-pix_fmt', 'yuv420p',
    '-f', 'hls', '-hls_time', '2', '-hls_list_size', '6', '-hls_flags', 'temp_file',
    '-hls_segment_filename', join(output, 'chunk-%06d.ts'), '-method', 'PUT', `${base}/_publish/index.m3u8`,
  ], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
  let diagnostics = ''; let exited = false;
  child.stderr.on('data', data => { if (diagnostics.length < 8192) diagnostics += data; });
  const completion = new Promise((ok, fail) => { child.once('error', fail); child.once('close', code => { exited = true; code === 0 ? ok() : fail(new Error(`Synthetic FFmpeg exited (${code}); diagnostics retained only in memory.`)); }); });
  const deadline = setTimeout(() => child.kill(), 45000);
  const sequences = new Set();
  try {
    while (!exited) {
      const response = await fetch(`${base}/index.m3u8`, { signal: AbortSignal.timeout(2000) });
      if (response.ok) {
        const bytes = Buffer.from(await response.arrayBuffer());
        assert.equal(bytes.length, Number(response.headers.get('content-length')));
        sequences.add(parsePlaylist(bytes.toString()).lastSegmentSequence);
      }
      await delay(150);
    }
    await completion;
  } finally { clearTimeout(deadline); }
  assert.ok(sequences.size >= 15, 'Publish beyond the six-current plus seven-previous retention window');
  const final = parsePlaylist(await (await fetch(`${base}/index.m3u8`)).text());
  assert.equal(final.ended, true);
  const files = await readdir(output);
  const segments = files.filter(name => /^chunk-\d+\.ts$/.test(name));
  assert.ok(segments.length >= 12 && segments.length <= 14, 'Retain the current playlist plus previous-segment grace, then prune');
  assert.ok(!files.some(name => name.includes('.m3u8')), 'No playlist file can be locked or renamed');
  assert.ok(!/failed to rename|failed to delete|Operation not permitted/i.test(diagnostics));
  console.log(`Real FFmpeg synthetic publish passed: ${sequences.size} sequence observations, ${segments.length} retained local TS files, memory-only complete playlist, clean ENDLIST and no rename/delete failures.`);
} finally {
  if (child && child.exitCode === null) child.kill();
  server.closeAllConnections(); await new Promise(ok => server.close(ok));
  if (!output.startsWith(prefix)) throw new Error('Refusing cleanup outside synthetic fixture');
  await rm(output, { recursive: true, force: true });
}
