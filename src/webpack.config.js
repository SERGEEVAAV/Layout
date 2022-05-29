const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './index.html',
    }),
];
module.exports = {
    plugins,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'main.js',
        puth: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        hot: true,
    },
}

