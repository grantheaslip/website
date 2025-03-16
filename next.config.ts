/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = (() => {
  if (process.env.RUN_WEBPACK_BUNDLE_ANALYZER === "true") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore (@next/bundle-analyzer is in devDependencies so
    // won’t exist on CI)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const withBundleAnalyzer = require("@next/bundle-analyzer")({});

    return withBundleAnalyzer(nextConfig);
  }

  return nextConfig;
})();
