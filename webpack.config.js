const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: { path: path.resolve(__dirname, "dist"), filename: '[name].bundle.js', publicPath: '/' },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
    liveReload: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_BASE: "https://homnaydocgi-api.herokuapp.com",
      APP_BASE: "http://localhost:3000"
    }),
    // new ESLintPlugin(options)
  ],
  resolve: {
    alias: {
      srcRoot: path.resolve(__dirname, './src'),
    }
  }
};
