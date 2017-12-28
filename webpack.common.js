const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					]
				})
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('smart.zoom.css'),
	]
};
