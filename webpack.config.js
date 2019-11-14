const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const template = [path.resolve(__dirname, './src/index.hbs')];

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, './src'),
    ],
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: require.resolve('handlebars-loader'),
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        ...template.map(file => new HtmlWebpackPlugin({
            template: file,
        })),
        new CleanWebpackPlugin(),
    ]
}