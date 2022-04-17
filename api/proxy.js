// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = (req, res) => {
// 	let target = "";

// 	if (req.url.startsWith('/api.php')) {
// 		target = "http://btzs.shbotao.net/";
// 	}

// 	createProxyMiddleware({
// 		target,
// 		changeOrigin: true
// 	})(req, res);
// }


const request = require('request');

module.exports = (req, res) => {
  // proxy middleware options
  let prefix = "/api.php"
  if (!req.url.startsWith(prefix)) {
    return;
  }
  let target = "http://btzs.shbotao.net" + req.url;

  let options = {
    'method': 'POST',
    'url': target
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(response.body);
    res.end();
  });
}
