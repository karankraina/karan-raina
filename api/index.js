import Fastify from 'fastify';
import fs from 'node:fs';

const html = fs.readFileSync('./profile.html', { encoding: 'utf-8' })

const app = Fastify({
  logger: false,
})

app.get('/', async (req, reply) => {
  reply.status(200).type('text/html').send(html)
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}
