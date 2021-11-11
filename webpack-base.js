const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.ts",
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "app.js"
	},

	resolve: {
		extensions: [".ts", ".js", ".json", ".scss", ".vue"],
		modules: ["node_modules"],
		alias: {
			'root': path.resolve(__dirname, "./src"),
			'assets': path.resolve(__dirname, "./src/assets"),
			'pages': path.resolve(__dirname, "./src/pages")
		}
	},

	module: {
		rules: [{
			test: /\.vue$/,
			use: ["vue-loader"]
		},
		{
			test: /\.(j|t)s$/,
			use: [
				"babel-loader",
				{
					loader: "ts-loader",
					options: {
						transpileOnly: true,
						happyPackMode: true
					}
				},
			],
			exclude: path => /node_modules/.test(path) && !/node_modules(\/|\\)(swiper|dom7|vue-baidu-map)/.test(path)
		},
		{
			test: /\.s?css$/,
			use: [
				"vue-style-loader",
				"css-loader",
				"postcss-loader",
				{
					loader: "sass-loader",
					options: {
						data: `
									@import "root/style/vars.scss";
									@import "root/style/utils.scss";
									@import "root/style/animation.scss";
								`
					}
				}
			]
		}
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.join(__dirname, "/public"),
				to: "./"
			}
		]),
	]
};
