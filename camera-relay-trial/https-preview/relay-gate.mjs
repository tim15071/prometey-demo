// Bounded, loopback-only, memory-only proxy. No credentials and no fallback media.
import { createServer } from 'node:http';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchPlaylistSample } from './probe-camera-continuity.mjs';

export class RelayGate {
  constructor(deadlineMs) { this.deadlineMs = deadlineMs; this.reason = 'waiting_for_progress'; this.last = null; this.progressAt = 0; this.checkedAt = 0; this.ready = false; this.reset = false; }
  observe(sample, now) {
    this.checkedAt = now;
    if (now >= this.deadlineMs) { this.ready = false; this.reason = 'test_expired'; return; }
    if (this.reset) return;
    if (!sample.ok || sample.ended) { this.ready = false; this.reason = sample.ended ? 'relay_ended' : 'relay_unavailable'; return; }
    if (this.last && (sample.mediaSequence < this.last.mediaSequence || sample.lastSegmentSequence < this.last.lastSegmentSequence)) {
      this.reset = true; this.ready = false; this.reason = 'sequence_reset'; return;
    }
    if (this.last && sample.lastSegmentSequence > this.last.lastSegmentSequence) { this.ready = true; this.progressAt = now; this.reason = 'ready'; }
    this.last = sample;
  }
  state(now) {
    if (now >= this.deadlineMs) return { ready: false, reason: 'test_expired', remainingSeconds: 0 };
    const remainingSeconds = Math.ceil((this.deadlineMs - now) / 1000);
    if (this.reset) return { ready: false, reason: 'sequence_reset', remainingSeconds };
    if (!this.ready) return { ready: false, reason: this.reason, remainingSeconds };
    if (now - this.checkedAt > 5000 || now - this.progressAt > 8000) return { ready: false, reason: 'relay_stalled', remainingSeconds };
    return { ready: true, reason: 'ready', remainingSeconds };
  }
}

export function mediaPath(url) {
  if (typeof url !== 'string' || !/^\/(?:index\.m3u8|chunk-\d+\.ts)$/u.test(url)) return null;
  return url;
}

export async function readMedia(path, { deadlineMs, fetchImpl = fetch, now = Date.now } = {}) {
  if (!mediaPath(path)) throw new Error('invalid_media_path');
  const left = deadlineMs - now();
  if (left <= 0) throw new Error('test_expired');
  const controller = new AbortController();
  let timeout;
  const deadline = new Promise((_, reject) => { timeout = setTimeout(() => { controller.abort(); reject(new Error('upstream_timeout')); }, Math.min(left, 2000)); });
  const read = async () => {
    const url = `http://127.0.0.1:8898${path}`;
    const response = await fetchImpl(url, { redirect: 'error', credentials: 'omit', cache: 'no-store', signal: controller.signal });
    if (response.status !== 200 || response.redirected || (response.url && response.url !== url) || !response.body) throw new Error('relay_unavailable');
    const reader = response.body.getReader();
    let length = 0;
    const chunks = [];
    const max = path.endsWith('.m3u8') ? 65536 : 8 * 1024 * 1024;
    try {
      while (true) {
        const next = await reader.read();
        if (next.done) break;
        length += next.value.byteLength;
        if (length > max) throw new Error('upstream_too_large');
        chunks.push(Buffer.from(next.value));
      }
    } finally { void reader.cancel().catch(() => {}); }
    if (now() >= deadlineMs) throw new Error('test_expired');
    return Buffer.concat(chunks);
  };
  try { return await Promise.race([read(), deadline]); }
  finally { clearTimeout(timeout); controller.abort(); }
}

export function validateTrialSeconds(seconds, approved = false) {
  if (!approved || !Number.isInteger(seconds) || seconds < 30 || seconds > 3600) throw new Error('Explicit approved finite protected test required (30..3600 seconds).');
  return seconds;
}

export async function startGate({ seconds, approved = false }) {
  validateTrialSeconds(seconds, approved);
  const deadlineMs = Date.now() + seconds * 1000;
  const gate = new RelayGate(deadlineMs);
  let closed = false;
  let polling = false;
  let inflight = 0;
  const poll = async () => {
    if (closed || polling) return;
    polling = true;
    try { gate.observe(await fetchPlaylistSample(), Date.now()); }
    finally { polling = false; }
  };
  const server = createServer(async (req, res) => {
    const state = gate.state(Date.now());
    const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
    const unavailable = () => { if (!res.headersSent) res.writeHead(503, { ...headers, 'Content-Type': 'text/plain', 'Retry-After': '2' }).end('Live test unavailable.'); else res.destroy(); };
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, headers).end(); return; }
    if (req.url === '/healthz') {
      const data = JSON.stringify(state);
      res.writeHead(state.ready && !closed ? 200 : 503, { ...headers, 'Content-Type': 'application/json' });
      res.end(req.method === 'HEAD' ? undefined : data); return;
    }
    const path = mediaPath(req.url);
    if (!path) { res.writeHead(404, headers).end(); return; }
    if (closed || !state.ready || inflight >= 8) { unavailable(); return; }
    inflight++;
    try {
      const data = await readMedia(path, { deadlineMs });
      if (closed || !gate.state(Date.now()).ready) { unavailable(); return; }
      res.writeHead(200, { ...headers, 'Content-Type': path.endsWith('.m3u8') ? 'application/vnd.apple.mpegurl' : 'video/mp2t', 'Content-Length': data.length });
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch { unavailable(); }
    finally { inflight--; }
  });
  await new Promise((ok, fail) => { server.once('error', fail); server.listen(8899, '127.0.0.1', ok); });
  const interval = setInterval(() => void poll(), 2000);
  const stop = () => { if (closed) return; closed = true; clearInterval(interval); clearTimeout(timer); server.close(); server.closeAllConnections(); };
  const timer = setTimeout(stop, Math.max(0, deadlineMs - Date.now()));
  process.once('SIGINT', stop); process.once('SIGTERM', stop);
  void poll();
  console.log('Finite loopback gate started; no public listener or camera credentials.');
  return { stop, server, gate };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.length !== 3 || args[0] !== '--approved-protected-test' || args[1] !== '--seconds' || !/^\d+$/u.test(args[2])) throw new Error('Use only --approved-protected-test --seconds 30..3600 after approval.');
  await startGate({ approved: true, seconds: Number(args[2]) });
}
