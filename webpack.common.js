const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const options = {
//     "parserOptions": {
//         "ecmaVersion": 6,
//         "sourceType": "module",
//         "ecmaFeatures": {
//             "jsx": true
//         }
//     },
//     "parser": "esprima",
//     "rules": {
//         "semi": "error"
//     }
// };
module.exports = {
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
    resolve: {
        alias: {
            srcRoot: path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        // new ESLintPlugin(options)
    ],

};