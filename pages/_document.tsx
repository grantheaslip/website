/* eslint-disable max-classes-per-file */

import fs from 'fs';

import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentComponentContext,
} from 'next/document';

const isDevelopment = process.env.NODE_ENV === 'development';

export function getAppVersion(): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile('./package.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Couldn’t read package.json!');
        reject(err);
      } else {
        const packageJson = JSON.parse(data);
        resolve(packageJson.version);
      }
    });
  });
}

/* eslint-disable */

class CustomHead extends Head {
  render() {
    const { styles } = this.context._documentProps;

    let { head } = this.context._documentProps;
    let children = this.props.children;
    // show a warning if Head contains <title> (only in development)
    if (process.env.NODE_ENV !== 'production') {
      children = React.Children.map(children, (child: any) => {
        const isReactHelmet =
          child && child.props && child.props['data-react-helmet'];
        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn(
            "Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title",
          );
        }
        return child;
      });
      if (this.props.crossOrigin)
        console.warn(
          'Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated',
        );
    }

    // try to parse styles from fragment for backwards compat
    const curStyles: React.ReactElement[] = Array.isArray(styles)
      ? (styles as React.ReactElement[])
      : [];
    if (
      styles &&
      // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props &&
      // @ts-ignore Property 'props' does not exist on type ReactElement
      Array.isArray(styles.props.children)
    ) {
      const hasStyles = (el: React.ReactElement) =>
        el &&
        el.props &&
        el.props.dangerouslySetInnerHTML &&
        el.props.dangerouslySetInnerHTML.__html;
      // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props.children.map((child: React.ReactElement) => {
        if (Array.isArray(child)) {
          child.map((el) => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return (
      <head {...this.props}>
        {children}
        {head}
        {this.getCssLinks()}
        {styles || null}
      </head>
    );
  }
}

/* eslint-enable */

let appVersion: string | null;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    if (typeof appVersion !== 'string') {
      appVersion = await getAppVersion();
    }

    return {
      appVersion: appVersion,
      ...initialProps,
    };
  }

  getChildContext(): DocumentComponentContext {
    if (!isDevelopment) {
      // @ts-ignore
      this.props.files = this.props.files.filter(
        (fileName) => !fileName.endsWith('.js'),
      );
    }

    return {
      _documentProps: this.props,
      // In dev we invalidate the cache by appending a timestamp to the resource URL.
      // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
      // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
      _devOnlyInvalidateCacheQueryString:
        process.env.NODE_ENV !== 'production' ? `?ts=${Date.now()}` : '',
    };
  }

  render() {
    return (
      <Html lang='en-CA' dir='ltr'>
        {isDevelopment ? (
          <Head>
            <meta name='website:version' content={appVersion} />
          </Head>
        ) : (
          <CustomHead>
            <meta name='website:version' content={appVersion} />
          </CustomHead>
        )}
        <body>
          <Main />
          {isDevelopment && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
