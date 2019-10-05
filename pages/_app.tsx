import Head from 'next/head';

const WebsiteApp = ({ Component, pageProps }) => {
  const websiteVersion = process.env.WEBSITE_VERSION;

  return (
    <>
      <Head>
        <meta name='website:version' content={websiteVersion} />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default WebsiteApp;
