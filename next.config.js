/* eslint-disable no-param-reassign */

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  generateEtags: false,
  poweredByHeader: false,
  webpack: (config, options) => {
    if (process.env.RUN_WEBPACK_BUNDLE_ANALYZER === 'true') {
      // eslint-disable-next-line global-require
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: options.isServer
            ? '../analyze/server.html'
            : './analyze/client.html',
        }),
      );
    }

    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });

    return config;
  },
});
