'use strict';
const webpack = require('webpack'),
      path = require('path');
module.exports = {
    entry: {
        main: [
            './src/jsx/init.js'
        ]
    },
    /*externals: {
        appVars: 'appVars',
        reactLoaders: 'reactLoaders'
    },*/
    output: {
        path: path.resolve(__dirname, 'dist/'),
        //publicPath: '/js',
        filename: 'bundle.[name].js'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'json']
    },
    watch: true,
    watchOptions: {
        ignored: ['assets', 'node_modules']
    }
}