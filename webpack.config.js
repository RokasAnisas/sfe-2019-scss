const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, './src/index.js'),
    ],
    devServer: { contentBase: './dist' },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: require.resolve('handlebars-loader'),
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'styles/[name].css',
                        }
                    },
                    'extract-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    'sass-loader'
                ]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.hbs'),
        }),
        new HtmlWebpackTagsPlugin({
            tags: ['styles/index.css'], append: true
        }),
        new CleanWebpackPlugin(),
        // new StylelintPlugin(),
    ]
}