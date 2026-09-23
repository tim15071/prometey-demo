// Experimental, finite local test. No cloud credentials or public listeners.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, readdir, realpath, stat } from 'node:fs/promises';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const options = {};
for (let i = 0; i < args.length; i += 2) {
  if (!['--input', '--output', '--ffmpeg', '--seconds'].includes(args[i]) || !args[i + 1]) throw new Error('Expected --input --output --ffmpeg [--seconds]');
  options[args[i].slice(2)] = args[i + 1];
}
for (const name of ['input', 'output', 'ffmpeg']) if (!isAbsolute(options[name] || '') || /^(?:\\\\|\/\/)/.test(options[name])) throw new Error(`${name} must be an absolute local path`);
const seconds = Number(options.seconds || 180);
if (!Number.isInteger(seconds) || seconds < 30 || seconds > 300) throw new Error('Duration must be 30–300 seconds');
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
const server = createServer(async (req, res) => {
  const filename = (req.url || '').split('?')[0].slice(1);
  if (!['GET', 'HEAD'].includes(req.method) || !/^(?:index\.m3u8|chunk-\d+\.ts)$/.test(filename)) { res.writeHead(404).end(); return; }
  try {
    const playlist = await stat(join(options.output, 'index.m3u8'));
    if (closed || Date.now() - playlist.mtimeMs > 20000) { res.writeHead(503, { 'Cache-Control': 'no-store' }).end(); return; }
    const path = join(options.output, filename);
    const info = await stat(path);
    res.writeHead(200, {
      'Content-Type': filename.endsWith('.m3u8') ? 'application/vnd.apple.mpegurl' : 'video/mp2t',
      'Content-Length': info.size, 'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      'X-Content-Type-Options': 'nosniff',
    });
    if (req.method === 'HEAD') res.end(); else createReadStream(path).on('error', () => res.destroy()).pipe(res);
  } catch { if (!res.headersSent) res.writeHead(404).end(); else res.destroy(); }
});
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
    '-f', 'h264', '-r', '25', '-i', 'pipe:0', '-map', '0:v:0', '-an', '-c:v', 'copy',
    '-f', 'hls', '-hls_time', '2', '-hls_list_size', '6', '-hls_flags', 'delete_segments+temp_file',
    '-hls_segment_filename', join(options.output, 'chunk-%06d.ts'), join(options.output, 'index.m3u8'),
  ], { windowsHide: true, stdio: ['pipe', 'ignore', 'pipe'] });
  tail = spawn(process.execPath, [join(root, 'scripts/falcon-avi-tail.mjs'), '--input', options.input, '--idle-ms', '15000', '--max-seconds', String(seconds)], {
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
