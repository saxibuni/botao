const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
	let target = "";

	if (req.url.startsWith('/api.php')) {
		target = "http://btgwcs.zhulu76.com";
	}

	createProxyMiddleware({
		target,
		changeOrigin: true
	})(req, res);
}
