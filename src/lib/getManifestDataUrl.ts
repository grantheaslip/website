// This is actually an import from @types/web-app-manifest; there is no
// corresponding web-app-manifest package.
//
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/web-app-manifest/index.d.ts
//
// eslint-disable-next-line import/no-unresolved
import { WebAppManifest } from "web-app-manifest";

import getFullyQualifiedUrl from "src/lib/getFullyQualifiedUrl";
import androidChrome36Png from "src/static/favicons/android-chrome-36x36.png";
import androidChrome48Png from "src/static/favicons/android-chrome-48x48.png";
import androidChrome72Png from "src/static/favicons/android-chrome-72x72.png";
import androidChrome96Png from "src/static/favicons/android-chrome-96x96.png";
import androidChrome144Png from "src/static/favicons/android-chrome-144x144.png";
import androidChrome192Png from "src/static/favicons/android-chrome-192x192.png";

const getManifestDataUrl = () => {
  const webManifestContent: WebAppManifest = {
    background_color: "#ffffff",
    dir: "ltr",
    display: "browser",
    icons: [
      {
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome36Png.src }),
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome48Png.src }),
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome72Png.src }),
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome96Png.src }),
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome144Png.src }),
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome192Png.src }),
        sizes: "192x192",
        type: "image/png",
      },
    ],
    lang: "en-CA",
    name: "Grant Heaslip",
    orientation: "any",
    short_name: "Grant Heaslip",
    theme_color: "#ffffff",
  };

  return `data:application/manifest+json,${encodeURIComponent(
    JSON.stringify(webManifestContent)
  )}`;
};

export default getManifestDataUrl;
