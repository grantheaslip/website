import Head from "next/head";
import { FunctionComponent } from "react";

import Page from "src/components/Page";
import getFormattedTitle from "src/utils/getFormattedTitle";

const title = getFormattedTitle();

const Home: FunctionComponent = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <h1>Grant Heaslip</h1>

    <p>I’m a web developer living in Toronto, Canada.</p>

    <p>
      If you want to get in touch, send an e-mail to{" "}
      <a href="mailto:grant@grantheaslip.ca">grant@grantheaslip.ca</a>.
    </p>
  </Page>
);

export const config = {
  unstable_runtimeJS: false,
};

export default Home;
