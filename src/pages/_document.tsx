import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-CA" dir="ltr">
        <Head />
        <body className="bg-neutral-100 font-serif text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
