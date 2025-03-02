import { AppProps } from "next/app";
import { FunctionComponent } from "react";

const WebsiteApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

export default WebsiteApp;
