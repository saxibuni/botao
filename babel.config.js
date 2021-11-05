module.exports = {
	presets: [
		[
			"@vue/babel-preset-app",
			{
				useBuiltIns: "usage",
				modules: false,
				debug: false,
				corejs: {
					version: 3,
					proposals: true
				}
			}
		]
	],
	plugins: [
		[
			"component",
			{
				"libraryName": "element-ui",
				"styleLibraryName": "theme-chalk"
			}
		]
	]
}
