/* eslint-disable functional/immutable-data */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  env: {
    // TODO: Expose package.json version (seems to be missing in Vercel production)
    // WEBSITE_VERSION: packageJson.version,
  },
  webpack: (config, options) => {
    if (
      process.env.RUN_WEBPACK_BUNDLE_ANALYZER === "true" &&
      !options.isServer
    ) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze/client.html",
        })
      );
    }

    return config;
  },
};
