import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";

import Page from "src/components/Page";
import getFormattedTitle from "src/utils/getFormattedTitle";

const title = getFormattedTitle("404");

const Error: FunctionComponent = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <h1>404: Not found</h1>

    <p>This page or file doesn’t exist.</p>

    <p>
      <Link href="/">Click here</Link> to navigate to the homepage.
    </p>
  </Page>
);

export const config = {
  unstable_runtimeJS: false,
};

export default Error;
