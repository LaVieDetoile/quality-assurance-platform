import Fastify from 'fastify';

export function buildApp() {
  const app = Fastify({ logger: false });
  app.get('/health', async () => ({ status: 'ok' }));
  app.get('/api/todos', async () => [{ id: 1, title: 'Add quality gates', completed: false }]);
  app.get('/', async (_request, reply) =>
    reply.type('text/html').send('<h1>QA Quality Gates Demo</h1><button>Run checks</button>'),
  );
  return app;
}
