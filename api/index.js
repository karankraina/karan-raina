import Fastify from 'fastify';
import fs from 'node:fs';

const app = Fastify({
  logger: true,
})

const json = fs.readFileSync('package.json');
console.log(json)

app.get('/', async (req, reply) => {
  return reply.status(200).type('text/html').send(html)
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Karan Raina</title>
    <meta
      name="description"
      content="Karan Raina | Open Source Creator and Contributor."
    />
  </head>
  <body>
    <h1>Karan Raina</h1>
  </body>
</html>
`
