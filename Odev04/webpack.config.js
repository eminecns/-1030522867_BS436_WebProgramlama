
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    entry: './src/index.js',
    output: {
        filename: "index.jsx",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "Homework"
    },
    devServer: {
        contentBase: './public',
        injectClient: false
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false