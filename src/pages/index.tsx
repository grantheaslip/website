import Head from "next/head";
import { FunctionComponent } from "react";

import Page from "components/Page";
import { getFormattedTitle } from "lib/utils";

const title = getFormattedTitle();

const Home: FunctionComponent = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <h1>Grant Heaslip</h1>

    <p>
      I’m a web developer and video game nerd living in Toronto, Canada. I care
      way too much about things that don’t matter.
    </p>

    <p>
      If you want to get in touch, send an e-mail to{" "}
      <a href="mailto:g@hslp.ca">g@hslp.ca</a>.
    </p>
  </Page>
);

export const config = {
  // https://github.com/zeit/next.js/pull/11949
  // eslint-disable-next-line @typescript-eslint/camelcase
  unstable_runtimeJS: false,
};

export default Home;
