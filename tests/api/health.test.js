import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../../src/app.js';

let app;
beforeAll(async () => {
  app = buildApp();
  await app.ready();
});
afterAll(async () => app.close());

describe('API quality checks', () => {
  it('health endpoint returns ok', async () => {
    const response = await app.inject('/health');
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  });
  it('todo endpoint returns stable schema', async () => {
    const response = await app.inject('/api/todos');
    expect(response.statusCode).toBe(200);
    expect(response.json()[0]).toHaveProperty('title');
  });
});
