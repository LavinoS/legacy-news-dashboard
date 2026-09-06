const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser.js'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser.js',
        }),
      );

      return config;
    },
  },
};
