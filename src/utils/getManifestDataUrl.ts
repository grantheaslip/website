import { WebAppManifest } from "web-app-manifest";

import androidChrome36Png from "src/static/favicons/android-chrome-36x36.png";
import androidChrome48Png from "src/static/favicons/android-chrome-48x48.png";
import androidChrome72Png from "src/static/favicons/android-chrome-72x72.png";
import androidChrome96Png from "src/static/favicons/android-chrome-96x96.png";
import androidChrome144Png from "src/static/favicons/android-chrome-144x144.png";
import androidChrome192Png from "src/static/favicons/android-chrome-192x192.png";

import getFullyQualifiedUrl from "src/utils/getFullyQualifiedUrl";

const getManifestDataUrl = () => {
  const webManifestContent: WebAppManifest = {
    background_color: "#ffffff",
    dir: "ltr",
    display: "browser",
    icons: [
      {
        sizes: "36x36",
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome36Png.src }),
        type: "image/png",
      },
      {
        sizes: "48x48",
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome48Png.src }),
        type: "image/png",
      },
      {
        sizes: "72x72",
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome72Png.src }),
        type: "image/png",
      },
      {
        sizes: "96x96",
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome96Png.src }),
        type: "image/png",
      },
      {
        sizes: "144x144",
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome144Png.src }),
        type: "image/png",
      },
      {
        sizes: "192x192",
        src: getFullyQualifiedUrl({ rootRelativeUrl: androidChrome192Png.src }),
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
    JSON.stringify(webManifestContent),
  )}`;
};

export default getManifestDataUrl;
