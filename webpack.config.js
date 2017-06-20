const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
			},
			// {
			// 	test: /\.css$/,
			// 	use: [ 'style-loader', 'css-loader' ],
			// },
			{
				test: /\.less$/,
				use: [ 'style-loader', 'css-loader', 'less-loader'],
			}
		]
	},
	plugins: [ HtmlWebpackPluginConfig ]
};
