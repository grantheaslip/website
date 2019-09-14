import App from 'next/app';
import { options } from 'preact';

// Via https://github.com/preactjs/preact/pull/1690
if (process.env.NODE_ENV === 'development') {
  const old = options.vnode;
  options.vnode = (vnode) => {
    // Call the previous 'hook'
    old(vnode);

    /* eslint-disable no-param-reassign, no-underscore-dangle */

    // @ts-ignore
    delete vnode.props.__self;

    // @ts-ignore
    delete vnode.props.__source;

    /* eslint-enable no-param-reassign, no-underscore-dangle */
  };
}

if (process.browser) {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

export default class WebsiteApp extends App {}
