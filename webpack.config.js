const path = require('path');
const webpack = require('webpack');

const config = {
    entry:'./client/src/init.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist/')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;