/* eslint-disable no-param-reassign */

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  experimental: { publicDirectory: true },
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

    config.module.rules.push(
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.(ico|png|txt)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]',
              outputPath: 'static',
              publicPath: '/_next/static',
            },
          },
        ],
      },
      {
        test: /(manifest\.webmanifest|browserconfig\.xml)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]',
              outputPath: 'static',
              publicPath: '/_next/static',
            },
          },
          {
            loader: 'app-manifest-loader',
          },
        ],
      },
    );

    return config;
  },
});
