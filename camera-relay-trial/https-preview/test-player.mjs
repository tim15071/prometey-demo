import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function setup() {
  const elements = Object.fromEntries(['video', 'start', 'overlay', 'message', 'status', 'remaining'].map(key => [key, { dataset: {}, textContent: '', hidden: false, disabled: false, events: {}, addEventListener(name, fn) { this.events[name] = fn; } }]));
  const plays = [];
  Object.assign(elements.video, { paused: true, pause() { this.paused = true; }, removeAttribute() {}, load() {}, play() { return new Promise((resolve, reject) => plays.push({ resolve, reject })); }, canPlayType() { return 'probably'; } });
  const players = [];
  class FakeHls {
    static Events = { ERROR: 'error', MANIFEST_PARSED: 'manifest' };
    static isSupported() { return true; }
    constructor() { this.events = {}; players.push(this); }
    on(name, fn) { this.events[name] = fn; }
    loadSource() {} attachMedia() {} destroy() {}
  }
  const context = vm.createContext({ document: { querySelector: selector => elements[selector.slice(1)] }, window: { Hls: FakeHls }, Hls: FakeHls, fetch: async () => ({ ok: true, json: async () => ({ ready: true, remainingSeconds: 3600 }) }), AbortSignal: { timeout() {} }, setInterval() {}, Date, Number, console });
  vm.runInContext(readFileSync(new URL('./www/player.js', import.meta.url), 'utf8'), context);
  return { elements, plays, players, context };
}

test('stopped pending play rejection cannot hide retry or revive live status', async () => {
  const { elements, plays, players, context } = setup();
  await elements.start.events.click(); players[0].events.manifest();
  vm.runInContext("stop('Stopped')", context);
  plays[0].reject(new Error('Aborted by source cleanup')); await Promise.resolve();
  assert.equal(elements.overlay.hidden, false);
  assert.equal(elements.status.textContent, 'Трансляция недоступна');
  assert.equal(elements.status.dataset.live, 'false');
});

test('old play rejection cannot override a newer playback attempt', async () => {
  const { elements, plays, players, context } = setup();
  await elements.start.events.click(); players[0].events.manifest();
  vm.runInContext("stop('Stopped')", context);
  await elements.start.events.click();
  plays[0].reject(new Error('Late old failure')); await Promise.resolve();
  assert.equal(elements.status.textContent, 'Подключение…');
  assert.equal(elements.overlay.hidden, false);
});

test('hour countdown is bounded and shows clear completion', () => {
  const { context } = setup();
  assert.equal(vm.runInContext('countdown(3600)', context), 'Осталось 1:00:00');
  assert.equal(vm.runInContext('countdown(3599)', context), 'Осталось 59:59');
  assert.equal(vm.runInContext('countdown(-1)', context), 'Осталось 00:00');
});
