import { AppProps } from "next/app";
import Head from "next/head";
import { FunctionComponent } from "react";

const WebsiteApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      {/* <meta name='website:version' content={websiteVersion} /> */}
    </Head>
    <Component {...pageProps} />
  </>
);

export default WebsiteApp;
