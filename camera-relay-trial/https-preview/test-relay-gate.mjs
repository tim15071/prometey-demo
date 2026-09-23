import test from 'node:test';
import assert from 'node:assert/strict';
import { RelayGate, mediaPath, readMedia, startGate, validateTrialSeconds } from './relay-gate.mjs';
const sample = n => ({ ok: true, ended: false, mediaSequence: n, lastSegmentSequence: n + 5 });
test('requires progress, blocks stopped relay and deadline, not merely HTTP success', () => {
  const g = new RelayGate(30000);
  g.observe(sample(1), 1000); assert.equal(g.state(1000).ready, false);
  g.observe(sample(2), 3000); assert.equal(g.state(3000).ready, true);
  g.observe(sample(2), 8000); assert.equal(g.state(11001).reason, 'relay_stalled');
  g.observe({ ok: false }, 12000); assert.equal(g.state(12000).ready, false);
  g.observe(sample(2), 13000); assert.equal(g.state(13000).ready, false);
  g.observe(sample(3), 14000); assert.equal(g.state(14000).ready, true);
  assert.equal(g.state(30000).reason, 'test_expired');
});
test('sequence reset permanently closes this test; ENDLIST cannot be live', () => {
  const g = new RelayGate(30000); g.observe(sample(4), 1000); g.observe(sample(5), 2000);
  g.observe(sample(1), 3000); g.observe(sample(8), 4000);
  assert.equal(g.state(4000).reason, 'sequence_reset');
  const e = new RelayGate(30000); e.observe(sample(1), 1000); e.observe({ ...sample(2), ended: true }, 2000);
  assert.equal(e.state(2000).ready, false);
});
test('only exact relay paths accepted', () => {
  for (const path of ['/index.m3u8', '/chunk-000002.ts']) assert.equal(mediaPath(path), path);
  for (const path of ['/recording.avi', '/index.m3u8?url=evil', '/../secret', '//remote', 'http://example.com/', '/chunk-1.ts/']) assert.equal(mediaPath(path), null);
});
test('proxy pins loopback and rejects redirects/non-200/late data', async () => {
  const fetchImpl = async (url, options) => {
    assert.equal(url, 'http://127.0.0.1:8898/chunk-1.ts'); assert.equal(options.redirect, 'error');
    return new Response('segment');
  };
  assert.equal((await readMedia('/chunk-1.ts', { deadlineMs: 1000, now: () => 0, fetchImpl })).toString(), 'segment');
  await assert.rejects(readMedia('/chunk-1.ts', { deadlineMs: 1000, now: () => 0, fetchImpl: async () => new Response('', { status: 302 }) }), /unavailable/);
  let time = 0;
  await assert.rejects(readMedia('/chunk-1.ts', { deadlineMs: 1000, now: () => time, fetchImpl: async () => { time = 1000; return new Response('stale'); } }), /expired/);
});
test('cannot start without explicit finite approval; no requests occur', async () => {
  await assert.rejects(startGate({ seconds: 300 }), /approved/);
  for (const seconds of [29, 3601, Infinity, 3600.5, '3600']) await assert.rejects(startGate({ seconds, approved: true }), /approved/);
  assert.equal(validateTrialSeconds(3600, true), 3600);
});
test('one-hour gate expires at exact boundary even after fresh progress', () => {
  const end = 3600 * 1000;
  const g = new RelayGate(end);
  g.observe(sample(1), end - 3000);
  g.observe(sample(2), end - 1000);
  assert.deepEqual(g.state(end - 1), { ready: true, reason: 'ready', remainingSeconds: 1 });
  assert.deepEqual(g.state(end), { ready: false, reason: 'test_expired', remainingSeconds: 0 });
  g.observe(sample(3), end + 1000);
  assert.equal(g.state(end + 1000).ready, false);
});
