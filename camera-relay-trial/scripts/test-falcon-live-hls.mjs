// Pure argument tests: importing the relay must not bind a port or start a child.
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { parseLiveHlsArguments } from './falcon-live-hls.mjs';

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
console.log('Finite HLS argument checks passed: ordinary 300s bound, explicit 3900s hour-test bound, verified FPS option; no network, files, camera or processes touched.');
