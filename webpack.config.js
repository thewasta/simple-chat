const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCssAsset = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    favicon: 'src/img/favicon.png'
});

const webpackManifestPlugin = new WebpackAssetsManifest({
    output: 'manifest.json',
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'bundle.css',
    chunkFilename: '[id].css'
});

module.exports = {
    entry: './src/index.js',
    output: { // NEW
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    }, // NEW Ends
    plugins: [
        htmlPlugin,
        miniCssExtractPlugin,
        webpackManifestPlugin,
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}), new OptimizeCssAsset({})
        ]
    }
};