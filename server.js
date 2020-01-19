const throng = require('throng');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const startMaster = () => {
  console.info('Started master process.');
};

const startWorker = () => {
  const app = next({
    dev: dev,
  });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = createServer((req, res) => {
      const parsedUrl = parse(req.url, true);

      const { pathname, search } = parsedUrl;

      // ===================================================
      // === Redirect to canonical protocol and hostname ===
      // ===================================================
      const requestProtocol = req.headers['x-forwarded-proto'] || 'http';
      const requestHost = req.headers.host;

      const canonicalProtocol = process.env.CANONICAL_PROTOCOL;
      const canonicalHost = process.env.CANONICAL_HOST;

      if (
        typeof canonicalProtocol !== 'undefined'
        && typeof canonicalHost !== 'undefined'
        && (requestProtocol !== canonicalProtocol || requestHost !== canonicalHost)
      ) {
        res.writeHead(301, {
          Location: (
            `${canonicalProtocol}://${canonicalHost}${pathname}${search || ''}`
          ),
        });

        return res.end();
      }

      // =================================
      // === Redirect from *index to * ===
      // =================================
      if (pathname.endsWith('/index')) {
        res.writeHead(301, { Location: pathname.replace(/index$/, '') });

        return res.end();
      }

      // ======================================
      // === Redirect from *index.html to * ===
      // ======================================
      if (pathname.endsWith('/index.html')) {
        res.writeHead(301, { Location: pathname.replace(/index\.html$/, '') });

        return res.end();
      }

      return handle(req, res, parsedUrl);
    });

    server.listen(port, (err) => {
      if (err) throw err;

      console.info(
        `Started worker process on port ${port} (${
          dev ? 'development' : 'production'
        } mode).`,
      );
    });
  });
};

if (dev) {
  startWorker();
} else {
  throng({
    workers: 4,
    lifetime: Infinity,
    master: startMaster,
    start: startWorker,
  });
}
