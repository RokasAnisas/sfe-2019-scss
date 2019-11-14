const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');


module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, './src/index.js'),
        path.resolve(__dirname, './src/styles/index.scss'),
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
                            name: 'main.css'
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
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.hbs'),
        }),
        new HtmlWebpackTagsPlugin({
            tags: ['main.css'], append: true
        }),
        new CleanWebpackPlugin(),
    ]
}