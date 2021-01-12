const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      API_BASE: 'https://homnaydocgiserver.xyz',
      APP_BASE: 'http://homnaydocgi-client-2-iogc8.ondigitalocean.app',
    }),
  ],
});
