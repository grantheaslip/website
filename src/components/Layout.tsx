import { css, Global } from "@emotion/react";
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

const globalStyles = css`
  :root {
    color-scheme: light dark;

    --color-document-background: rgb(241, 241, 241);
    --color-page-background: rgb(255, 255, 255);
    --color-page-border: rgb(225, 225, 225);
    --color-page-link: rgb(0, 136, 204);
    --color-text: rgb(33, 33, 33);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-document-background: rgb(32, 32, 32);
      --color-page-background: rgb(0, 0, 0);
      --color-page-border: rgb(225, 225, 225);
      --color-page-link: rgb(102, 187, 255);
      --color-text: rgb(222, 222, 222);
    }
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  html,
  body {
    margin: 0;

    background: #f1f1f1;
    background: var(--color-document-background);

    color: #212121;
    color: var(--color-text);
    font-weight: 400;
    font-size: 16px;
    font-family: "Georgia", serif;
    line-height: 1.5em;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  @media (max-width: 360px) {
    html,
    body {
      font-size: 15px;
    }
  }

  body {
    margin-top: 3em;
    margin-top: 5vh;
  }
  body * {
    box-sizing: border-box;
  }
`;

const title = getFormattedTitle();

const Layout: FC<{ children: ReactNode }> = memo(({ children }) => {
  const manifestDataUrl = getManifestDataUrl();

  return (
    <>
      <Global styles={globalStyles} />

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

      <div
        css={css`
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;

          border: 1em solid transparent;
        `}
      >
        {children}
      </div>
    </>
  );
});

Layout.displayName = "Layout";

export default Layout;
