/* eslint-disable no-param-reassign */

module.exports = {
  experimental: {
    modern: process.env.NODE_ENV === 'production',
  },
  generateEtags: false,
  webpack: (config, options) => {
    if (!options.defaultLoaders) {
      throw new Error(
        'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
      );
    }

    if (options.isServer) {
      config.externals = ['react', 'react-dom', ...config.externals];
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    };

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

    return config;
  },
};
