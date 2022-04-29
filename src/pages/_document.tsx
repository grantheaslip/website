import Document, { Head, Html, Main, NextScript } from "next/document";

// eslint-disable-next-line functional/no-class
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-CA" dir="ltr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
