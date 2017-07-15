var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, 'app/assets/'),
        filename: 'bundle.js',
        publicPath: '/app/assets/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: [/node_modules/, path.resolve(__dirname, 'app/index.js'),],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    },
};