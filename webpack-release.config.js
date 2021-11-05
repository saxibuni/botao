const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { HashedModuleIdsPlugin } = require("webpack");
const { getArgvByKey } = require("./webpack-utils");
const merge = require('webpack-merge');
const common = require('./webpack-base');

const isReport = getArgvByKey("report");

module.exports = merge(common, {
	mode: "production",

	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name]_[contenthash].js"
	},

	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vue: {
					test: /[\\/]node_modules[\\/]vue*?/,
					name: "vue",
					priority: 1
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					enforce: true
				}
			}
		},

		minimizer: [
			new TerserPlugin({
				parallel: 4,
				extractComments: false,
				terserOptions: {
					compress: {
						drop_console: true,
						drop_debugger: true
					},
					output: {
						beautify: false,
						comments: false
					}
				}
			})
		]
	},

	module: {
		rules: [
			{
				test: /\.(jpg|png|jpeg|gif|svg|ttf|woff|mp4)$/,
				loader: "url-loader",
				options: {
					limit: 4096,
					fallback: {
						loader: 'file-loader',
						options: {
							name: "assets/[hash].[ext]"
						}
					}
				}
			}
		]
	},

	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: isReport ? "server" : "disabled"
		}),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist/*']
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
			filename: "index.html"
		}),
		new HashedModuleIdsPlugin({
			hashDigest: 'hex',
			hashDigestLength: 8
		})
	]
})
