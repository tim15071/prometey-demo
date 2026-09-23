// Offline adaptation only: does not start Caddy, request certificates or open sockets.
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('./', import.meta.url));
const executable = process.env.CADDY_TEST_EXECUTABLE || fileURLToPath(new URL('./tools/caddy-2.11.4/caddy.exe', import.meta.url));
// Public documentation fixture, not an actual viewer account. Never run this hash in deployment.
const fixture = '$2a$14$Zkx19XLiW6VYouLHR5NmfOFU0z2GTNmpkT/5qqR7hx4IjWJPDhjvG';
const adapt = hash => spawnSync(executable, ['adapt', '--config', 'Caddyfile.public.template', '--adapter', 'caddyfile'], { cwd: root, encoding: 'utf8', env: { ...process.env, TRIAL_PUBLIC_IPV4: '203.0.113.10', TRIAL_VIEWER_BCRYPT: hash } });
test('missing viewer hash fails closed before any listener can start', () => { assert.notEqual(adapt('').status, 0); });
test('authentication precedes all file, HLS, health and fallback routes', () => {
  const result = adapt(fixture); assert.equal(result.status, 0, 'Offline Caddy adaptation failed');
  const config = JSON.parse(result.stdout);
  const server = Object.values(config.apps.http.servers)[0];
  const handlers = server.routes[0].handle[0].routes.flatMap(route => route.handle);
  // Header middleware may precede auth; every other branch must remain downstream of it.
  const route = handlers.find(handler => handler.handler === 'subroute');
  assert.ok(route, 'Expected explicit protected route');
  const protectedHandlers = route.routes.flatMap(item => item.handle);
  assert.equal(protectedHandlers[0].handler, 'authentication');
  assert.equal(protectedHandlers[0].providers.http_basic.accounts[0].username, 'viewer');
  assert.equal(protectedHandlers[0].providers.http_basic.accounts[0].password, fixture);
  const json = JSON.stringify(route);
  assert.ok(json.includes('/healthz') && json.includes('/hls/*') && json.includes('/player.js'));
  assert.equal((JSON.stringify(config).match(/"handler":"authentication"/gu) || []).length, 1);
  assert.ok(!handlers.some(handler => ['file_server', 'reverse_proxy'].includes(handler.handler)), 'No branch may bypass protected route');
});
