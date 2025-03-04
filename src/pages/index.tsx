import Head from "next/head";
import { FC } from "react";

import MainHeading from "src/components/MainHeading";
import Page from "src/components/Page";
import getFormattedTitle from "src/lib/getFormattedTitle";

const title = getFormattedTitle();

const Home: FC = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <MainHeading>Grant Heaslip</MainHeading>

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
