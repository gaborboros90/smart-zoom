const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: "smart.zoom.css"
});

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
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
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
		extractSass,
	],
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		contentBase: './'
	}
};
