// Via https://github.com/aomkirby123/nextjs-preactX/blob/af6aaabf04029e910c8e17d2aab65be59789d3bd/server.js
require('module-alias/register');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({
  dev: dev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
