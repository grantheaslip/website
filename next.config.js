const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const redirects = () => [
  {
    source: "/index",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/:path*/index",
    destination: "/:path*",
    statusCode: 301,
  },
  {
    source: "/index.html",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/:path*/index.html",
    destination: "/:path*",
    statusCode: 301,
  },
  {
    source: "/:path+/",
    destination: "/:path+",
    statusCode: 301,
  },
];

module.exports = {
  env: {
    // TODO: Expose package.json version (seems to be missing in Zeit Now production)
    // WEBSITE_VERSION: packageJson.version,
  },
  experimental: {
    redirects,
  },
  generateEtags: false,
  poweredByHeader: false,
  webpack: (config, options) => {
    if (process.env.RUN_WEBPACK_BUNDLE_ANALYZER === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: options.isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
        })
      );
    }

    config.module.rules.push(
      {
        test: /\.(ico|png|txt)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash].[ext]",
              outputPath: "static",
              publicPath: "/_next/static",
            },
          },
        ],
      },
      {
        test: /(manifest\.webmanifest|browserconfig\.xml)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash].[ext]",
              outputPath: "static",
              publicPath: "/_next/static",
            },
          },
          {
            loader: "app-manifest-loader",
          },
        ],
      }
    );

    return config;
  },
};
