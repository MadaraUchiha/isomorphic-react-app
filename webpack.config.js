'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: './main',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    devtool: 'inline-source-map'

};