import Head from "next/head";
import { FC } from "react";

import MainHeading from "src/components/MainHeading";
import Page from "src/components/Page";
import getFormattedTitle from "src/lib/getFormattedTitle";

const title = getFormattedTitle("404");

const Error: FC = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <MainHeading>404: Not found</MainHeading>

    <p>This page or file doesn’t exist.</p>

    <p>
      <a href="/">Click here</a> to navigate to the homepage.
    </p>
  </Page>
);

export const config = {
  unstable_runtimeJS: false,
};

export default Error;
