const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'style.css',
    chunkFilename: '[id].css'
});
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: { // NEW
        path: path.join(__dirname, 'public'),
        filename: 'main.js',
        publicPath: '/'
    }, // NEW Ends
    plugins: [htmlPlugin, miniCssExtractPlugin],
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
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context + '/css/');
                            }
                        }
                    },
                    // 'style-loader',
                    'css-loader'
                    // 'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            }
        ]
    }
};