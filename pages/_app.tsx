import App from 'next/app';

if (process.browser) {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

export default class WebsiteApp extends App {}
