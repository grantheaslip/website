/* eslint-disable max-classes-per-file */

import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const isDevelopment = process.env.NODE_ENV === "development";

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
            "Warning: <title> should not be used in _document.js’s <Head>. https://err.sh/next.js/no-document-title",
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

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-CA" dir="ltr">
        {isDevelopment ? <Head /> : <CustomHead />}
        <body>
          <Main />
          {isDevelopment && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
