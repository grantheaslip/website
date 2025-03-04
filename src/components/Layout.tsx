import Head from "next/head";
import { FC, memo, ReactNode } from "react";

import getFormattedTitle from "src/lib/getFormattedTitle";
import getManifestDataUrl from "src/lib/getManifestDataUrl";
import androidChrome192x192Png from "src/static/favicons/android-chrome-192x192.png";
import appleTouchIcon180x180Png from "src/static/favicons/apple-touch-icon-180x180.png";
import faviconIco from "src/static/favicons/favicon.ico";
import favicon16x16Png from "src/static/favicons/favicon-16x16.png";
import favicon32x32Png from "src/static/favicons/favicon-32x32.png";
import favicon194x194Png from "src/static/favicons/favicon-194x194.png";

const title = getFormattedTitle();

const Layout: FC<{ children: ReactNode }> = memo(({ children }) => {
  const manifestDataUrl = getManifestDataUrl();

  return (
    <>
      <Head>
        <title>{title}</title>

        {/* ============
          === Favicons ===
          =============*/}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={appleTouchIcon180x180Png.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon32x32Png.src}
        />
        <link
          rel="icon"
          type="image/png"
          href={favicon194x194Png.src}
          sizes="194x194"
        />
        <link
          rel="icon"
          type="image/png"
          href={androidChrome192x192Png.src}
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href={favicon16x16Png.src}
          sizes="16x16"
        />
        <link rel="shortcut icon" href={faviconIco.src} />

        {/* ============
          === Manifest ===
          ============ */}
        <link rel="manifest" href={manifestDataUrl} />
      </Head>

      {children}
    </>
  );
});

Layout.displayName = "Layout";

export default Layout;
