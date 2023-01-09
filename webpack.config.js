const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
    index: './src/index.js',
},

  devServer: {
    static: './dist',
    watchFiles: ["src/index.html"],
    hot: true,
},

plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html',
        inject: 'body',
        cache: false
    }),
],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        },   
    };
