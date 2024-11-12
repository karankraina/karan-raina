import Fastify from 'fastify';
import fs from 'node:fs';

const app = Fastify({
  logger: false,
})

app.get('/', async (req, reply) => {
  reply.status = 200;
  reply.type = 'text/html';
  return fs.createReadStream('profile.html');
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}
