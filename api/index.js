import Fastify from 'fastify';

const app = Fastify({
  logger: false,
})

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Karan Raina is a passionate full-stack web developer from India, specializing in Node.js, React.js, Next.js, and more. Award-winning engineer and open-source contributor.">
    <meta name="keywords"
        content="Karan Raina, full-stack developer, Node.js, React.js, Next.js, Nest.js, Svelte, open-source, performance engineering, developer tools, scalable web applications">
    <meta name="author" content="Karan Raina">
    <meta name="robots" content="index, follow">
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Karan Raina - Full Stack Developer</title>


    <!-- Open Graph Meta Tags (For Social Media) -->
    <meta property="og:title" content="Karan Raina - Full Stack Developer">
    <meta property="og:description"
        content="Karan Raina is a passionate full-stack web developer from India, specializing in Node.js, React.js, Next.js, and more. Award-winning engineer and open-source contributor.">
    <meta property="og:image" content="URL_to_your_image_or_logo">
    <meta property="og:url" content="https://yourdomain.com">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Karan Raina - Full Stack Developer">
    <meta property="og:locale" content="en_US">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@karankraina">
    <meta name="twitter:title" content="Karan Raina - Full Stack Developer">
    <meta name="twitter:description"
        content="Karan Raina is a passionate full-stack web developer from India, specializing in Node.js, React.js, Next.js, and more. Award-winning engineer and open-source contributor.">
    <meta name="twitter:image" content="URL_to_your_image_or_logo">
    <meta name="twitter:url" content="https://yourdomain.com">

    <!-- Structured Data (JSON-LD) for Better SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Karan Raina",
      "url": "https://yourdomain.com",
      "image": "URL_to_your_image_or_logo",
      "jobTitle": "Senior Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Fynd"
      },
      "sameAs": [
        "https://www.linkedin.com/in/karankraina",
        "https://twitter.com/karankraina",
        "https://github.com/karankraina",
        "https://www.npmjs.com/~karankraina"
      ],
      "email": "mailto:karanraina1996@gmail.com",
      "telephone": "+91-9727093095"
    }
  </script>

    <style>
        /* Base styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #333;
            color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }

        h1,
        h2 {
            color: #fff;
        }

        h1 {
            font-size: 2.5em;
            color: #89bcef;
        }

        h2 {
            font-size: 1.8em;
            margin-top: 20px;
        }

        a {
            color: #89bcef;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Container styling */
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #333;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .avatar {
            display: flex;
            justify-content: center;
            height: 200px;
        }

        .avatar>img {
            border-radius: 50%;
            width: 200px;
        }

        .section {
            margin-bottom: 20px;
        }

        .list {
            list-style-type: none;
            padding: 0;
        }

        .list li {
            margin-bottom: 8px;
        }

        /* Footer styling */
        .footer {
            text-align: center;
            font-size: 0.9em;
            color: #666;
            margin-top: 40px;
        }
    </style>
</head>

<body>

    <div class="container">
        <section class="avatar">
            <img src="https://karankraina.github.io/karan-raina/avatar.jpg" alt="Karan Raina">
        </section>
        <h1 style="text-align: center">Karan Raina</h1>

        <div class="section">
            <h2>🚀 About Me</h2>
            <p>I am a professional full-stack web developer with expertise in building <strong>highly scalable</strong>,
                <strong>enterprise-level modern web applications</strong>. I love working with <strong>Node.js</strong>,
                <strong>React JS</strong>, <strong>Next JS</strong>, <strong>Nest JS</strong>, <strong>Svelte</strong>,
                and everything JavaScript. With a focus on performance engineering and developer tools, I have created
                robust solutions using Node.js that serve tens of thousands of requests per second.
            </p>
            <p>Beyond my professional work, I actively contribute to <strong>open-source projects</strong>, reflecting
                my commitment to the developer community and continuous learning.</p>
            <p>I'm also a big fan of <strong>military aviation</strong>, <strong>defense forces</strong>, <strong>the
                    moon</strong>, <strong>mountains</strong>, and <strong>yemberzels</strong>. 🌌⛰️</p>

                    <h2>👉<a href="https://karankraina.github.io/karan-raina/Karan_Raina.pdf" download><span> Get My Resume</span></a></h2>
        </div>

        <div class="section">
            <h2>🌱 Open Source Contributions</h2>
            <p>I am the creator and maintainer of the following Open Source packages:</p>
            <ul class="list">
                <li>📦 <a href="https://www.npmjs.com/package/express-under-pressure"
                        target="_blank">express-under-pressure</a> - Middleware for monitoring server health under high
                    load in ExpressJS.</li>
                <li>📦 <a href="https://www.npmjs.com/package/react-ssr-side-effects"
                        target="_blank">react-ssr-side-effects</a> - Middleware for handling server-side rendering side
                    effects in React.</li>
                <li>📦 <a href="https://www.npmjs.com/package/nodejs-threads" target="_blank">nodejs-threads</a> -
                    Simplified function-based implementation of Node.js worker threads.</li>
                <li>📦 <a href="https://www.npmjs.com/package/react-hydration-overlay"
                        target="_blank">react-hydration-overlay</a> - Webpack plugin for fixing server-client hydration
                    issues in React.</li>
                <li>📦 <a href="https://www.npmjs.com/package/node-fetch-timeout" target="_blank">node-fetch-timeout</a>
                    - Lightweight wrapper for \`node-fetch\` with timeout and retry options.</li>
            </ul>
        </div>

        <div class="section">
            <h2>🚀 Other Notable Packages I Have Contributed To</h2>
            <ul class="list">
                <li>📦 <a href="https://www.npmjs.com/package/fastify" target="_blank">fastify</a></li>
                <li>📦 <a href="https://www.npmjs.com/package/pino" target="_blank">pino</a></li>
                <li>📦 <a href="https://www.npmjs.com/package/autocannon" target="_blank">autocannon</a></li>
                <li>📦 <a href="https://www.npmjs.com/package/@fastify/under-pressure"
                        target="_blank">@fastify/under-pressure</a></li>
            </ul>
        </div>

    </div>

    <div class="footer">
        ✨ _"Building scalable web apps, one line of code at a time."_ ✨
    </div>

</body>

</html>
`;

app.get('/', async (req, reply) => {
  reply.status(200).type('text/html').send(html)
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}
