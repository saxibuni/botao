const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack-base');

module.exports = merge(common, {
	mode: "development",
	devtool: "eval-source-map",

	devServer: {
		open: true,
		contentBase: path.join(__dirname, "dist"),
		host: '0.0.0.0',
		useLocalIp: true,
		writeToDisk: false,
		liveReload: false,
		hot: true,
		proxy: {
			"/api.php": {
				target: 'https://www.shbotao.net',
				changeOrigin: true
			}
		}
	},

	module: {
		rules: [
			{
				test: /\.(jpg|png|jpeg|gif|svg|ttf|json|woff)$/,
				type: "javascript/auto",
				exclude: /node_modules/,
				use: {
					loader: "file-loader",
					options: {
						emitFile: false,
						name(path) {
							path = path.replace(/\\/g, '/');
							return path.split("src/")[1];
						}
					}
				}
			},
			{
				test: /\.(ttf|woff)$/,
				include: /node_modules/,
				loader: "file-loader"
			}
		]
	},

	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(__dirname, "/src/assets"),
				to: "./assets"
			}
		])
	]
});
