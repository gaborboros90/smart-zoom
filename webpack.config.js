const path = require('path');

module.exports = {
    entry: './lib/smart.zoom.module.js',
    output: {
        filename: 'smart.zoom.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './'
    }
};
