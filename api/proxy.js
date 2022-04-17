const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
	let target = "";

	if (req.url.startsWith('/api.php')) {
		target = "http://btzs.shbotao.net/";
	}

	createProxyMiddleware({
		target,
		changeOrigin: true
	})(req, res);
}
