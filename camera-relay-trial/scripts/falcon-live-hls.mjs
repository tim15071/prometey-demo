// Experimental, finite local test. No cloud credentials or public listeners.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, readdir, realpath, stat, unlink } from 'node:fs/promises';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { finiteTestSeconds, hourTestApproval } from './falcon-avi-tail.mjs';
import { parsePlaylist } from './probe-camera-continuity.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export function parseLiveHlsArguments(args) {
const options = {};
for (let i = 0; i < args.length; i += 2) {
  if (!['--input', '--output', '--ffmpeg', '--seconds', '--fps', '--approved-hour-test'].includes(args[i]) || !args[i + 1] || Object.hasOwn(options, args[i].slice(2))) throw new Error('Expected --input --output --ffmpeg and supported finite-test options');
  options[args[i].slice(2)] = args[i + 1];
}
for (const name of ['input', 'output', 'ffmpeg']) if (!isAbsolute(options[name] || '') || /^(?:\\\\|\/\/)/.test(options[name])) throw new Error(`${name} must be an absolute local path`);
options.approvedHourTest = hourTestApproval(options['approved-hour-test']);
options.seconds = finiteTestSeconds(options.seconds ?? 180, { min: 30, approvedHourTest: options.approvedHourTest });
if (!/^\d+$/u.test(String(options.fps ?? 25)) || Number(options.fps ?? 25) < 1 || Number(options.fps ?? 25) > 60) throw new Error('FPS must be an integer from 1 to 60, verified from the source.');
options.fps = Number(options.fps ?? 25);
return options;
}

// Playlist publication is memory-only: Windows cannot reliably replace a file
// while readers hold it open. The publisher path is loopback-only and is never
// routed by the public gate. Segments retain their immutable on-disk filenames.
export async function pruneRelaySegments(output, playlist, { unlinkFile = unlink } = {}) {
  const indexes = playlist.toString('utf8').split(/\r?\n/u).map(line => /^chunk-(\d+)\.ts$/u.exec(line)?.[1]).filter(value => value !== undefined).map(Number);
  if (!indexes.length || indexes.some(value => !Number.isSafeInteger(value))) throw new Error('Invalid local segment sequence');
  // The verified trial emits ~2s segments: retain seven previous segments in
  // addition to the six advertised ones, allowing clients to finish an older list.
  const keepFrom = Math.min(...indexes) - 7;
  const entries = await readdir(output, { withFileTypes: true });
  const obsolete = entries.filter(entry => entry.isFile() && /^chunk-\d+\.ts$/u.test(entry.name) && Number(entry.name.slice(6, -3)) < keepFrom);
  if (obsolete.length > 64) throw new Error('Unexpected number of obsolete trial segments');
  for (const entry of obsolete) {
    for (let attempt = 0; ; attempt++) {
      try { await unlinkFile(join(output, entry.name)); break; }
      catch (error) {
        if (error.code === 'ENOENT') break;
        if (!['EPERM', 'EBUSY'].includes(error.code)) throw error;
        // An old segment can still be held by a reader/antivirus. Retry on the
        // next publication instead of blocking the fresh playlist; the 64-file
        // obsolete backlog limit above prevents unbounded deferred retention.
        if (attempt >= 2) break;
        await new Promise(resolveRetry => setTimeout(resolveRetry, 25));
      }
    }
  }
}

export function createRelayServer({ output, isClosed = () => false, now = Date.now }) {
  let snapshot = null;
  let publishing = false;
  return createServer(async (req, res) => {
    if (req.method === 'PUT' && req.url === '/_publish/index.m3u8') {
      if (isClosed() || publishing || !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(req.socket.remoteAddress)) { res.writeHead(503).end(); return; }
      publishing = true;
      const timeout = setTimeout(() => req.destroy(), 2000);
      try {
        const chunks = []; let size = 0;
        for await (const chunk of req) {
          size += chunk.length;
          if (size > 65536) throw new Error('Playlist publication exceeds limit');
          chunks.push(chunk);
        }
        clearTimeout(timeout);
        const data = Buffer.concat(chunks);
        parsePlaylist(data.toString('utf8'));
        if (isClosed()) throw new Error('Relay closed');
        await pruneRelaySegments(output, data);
        if (isClosed()) throw new Error('Relay closed');
        snapshot = { data, mtimeMs: now() };
        res.writeHead(200, { 'Cache-Control': 'no-store' }).end();
      } catch { if (!res.destroyed) res.writeHead(400).end(); }
      finally { clearTimeout(timeout); publishing = false; }
      return;
    }
    const filename = (req.url || '').split('?')[0].slice(1);
    if (!['GET', 'HEAD'].includes(req.method) || !/^(?:index\.m3u8|chunk-\d+\.ts)$/.test(filename)) { res.writeHead(404).end(); return; }
    const isPlaylist = filename === 'index.m3u8';
    try {
      const path = join(output, filename);
      const playlist = snapshot;
      if (!playlist || isClosed() || now() - playlist.mtimeMs > 20000) { res.writeHead(503, { 'Cache-Control': 'no-store' }).end(); return; }
      const body = isPlaylist ? playlist.data : null;
      const size = body ? body.length : (await stat(path)).size;
      res.writeHead(200, {
        'Content-Type': isPlaylist ? 'application/vnd.apple.mpegurl' : 'video/mp2t',
        'Content-Length': size, 'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
        'X-Content-Type-Options': 'nosniff',
      });
      if (req.method === 'HEAD') res.end();
      else if (body) res.end(body);
      else createReadStream(path).on('error', () => res.destroy()).pipe(res);
    } catch { if (!res.headersSent) res.writeHead(isPlaylist ? 503 : 404, { 'Cache-Control': 'no-store' }).end(); else res.destroy(); }
  });
}

async function main() {
const options = parseLiveHlsArguments(process.argv.slice(2));
const seconds = options.seconds;
const outsideRoot = path => { const rel=relative(root,path); return rel==='..' || rel.startsWith(`..${sep}`) || isAbsolute(rel); };
if (!outsideRoot(resolve(options.output))) throw new Error('Private output must be outside the repository');
await mkdir(options.output, { recursive: true });
if (!outsideRoot(await realpath(options.output))) throw new Error('Resolved output must be outside the repository');
if ((await readdir(options.output)).length) throw new Error('Output directory must be empty');
if (!(await stat(options.input)).isFile() || !(await stat(options.ffmpeg)).isFile()) throw new Error('Input or FFmpeg is not a file');

let closed = false;
let tail;
let ffmpeg;
let deadline;
const diagnostic = createWriteStream(join(options.output, 'pipeline.log'), { flags: 'wx' });
const server = createRelayServer({ output: options.output, isClosed: () => closed });
await new Promise((ok, fail) => { server.once('error', fail); server.listen(8898, '127.0.0.1', ok); });

function stop() {
  if (closed) return;
  closed = true;
  clearTimeout(deadline);
  tail?.kill('SIGTERM');
  ffmpeg?.stdin.end();
  server.close();
  server.closeAllConnections();
  const force = setTimeout(() => ffmpeg?.kill('SIGTERM'), 2000);
  force.unref();
}
process.once('SIGINT', stop);
process.once('SIGTERM', stop);
deadline = setTimeout(stop, seconds * 1000);
try {
  ffmpeg = spawn(options.ffmpeg, [
    '-hide_banner', '-loglevel', 'error', '-nostdin', '-fflags', '+genpts',
    '-f', 'h264', '-r', String(options.fps), '-i', 'pipe:0', '-map', '0:v:0', '-an', '-c:v', 'copy',
    '-f', 'hls', '-hls_time', '2', '-hls_list_size', '6', '-hls_flags', 'temp_file',
    '-hls_segment_filename', join(options.output, 'chunk-%06d.ts'), '-method', 'PUT', 'http://127.0.0.1:8898/_publish/index.m3u8',
  ], { windowsHide: true, stdio: ['pipe', 'ignore', 'pipe'] });
  tail = spawn(process.execPath, [join(root, 'scripts/falcon-avi-tail.mjs'), '--input', options.input, '--idle-ms', '15000', '--max-seconds', String(seconds), ...(options.approvedHourTest ? ['--approved-hour-test', 'true'] : [])], {
    windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let warnings = 0;
  const warning = data => { diagnostic.write(data); if (warnings++ === 0) console.error('A pipeline diagnostic was received; details are in the private output directory.'); };
  ffmpeg.stderr.on('data', warning);
  tail.stderr.on('data', warning);
  ffmpeg.stdin.on('error', () => stop());
  tail.stdout.pipe(ffmpeg.stdin);
  tail.once('error', stop);
  ffmpeg.once('error', stop);
  tail.once('close', code => { if(code && !closed) process.exitCode=1; ffmpeg.stdin.end(); });
  console.log('Local prototype: http://127.0.0.1:8898/index.m3u8 (finite test; source readiness not yet confirmed)');
  await new Promise(resolveExit => ffmpeg.once('close', code => { if(code && !closed) process.exitCode=1; console.log(`Converter stopped (${code ?? 'signal'}).`); resolveExit(); }));
} finally { stop(); diagnostic.end(); }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
