const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('../src');

test('exposes service metadata at the root endpoint', async (t) => {
  const server = createApp().listen(0);
  t.after(() => server.close());
  const response = await fetch(`http://127.0.0.1:${server.address().port}/`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, 'online');
  assert.equal(body.health, '/health');
});

test('health endpoint returns an operational status', async (t) => {
  const server = createApp().listen(0);
  t.after(() => server.close());
  const response = await fetch(`http://127.0.0.1:${server.address().port}/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, 'ok');
  assert.match(body.timestamp, /^\d{4}-\d{2}-\d{2}T/);
});

test('info endpoint clearly separates implemented and planned features', async (t) => {
  const server = createApp().listen(0);
  t.after(() => server.close());
  const response = await fetch(`http://127.0.0.1:${server.address().port}/api/v1/info`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.stage, 'starter');
  assert.ok(body.implemented.includes('health check'));
  assert.ok(body.notImplemented.includes('token swaps'));
  assert.match(body.warning, /not audited/i);
});
