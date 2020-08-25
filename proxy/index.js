// include dependencies
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// proxy middleware options
const options = {
  target: "https://stream.binance.com:9443", // target host
  //   changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  //   pathRewrite: {
  //     "^/api/old-path": "/api/new-path", // rewrite path
  //     "^/api/remove/path": "/path", // remove base path
  //   },
  //   router: {
  //     // when request.headers.host == 'dev.localhost:3000',
  //     // override target 'http://www.example.org' to 'http://localhost:8000'
  //     "dev.localhost:3000": "http://localhost:8000",
  //   },
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);

// mount `exampleProxy` in web server
const app = express();

app.use(cors());
app.use("/", exampleProxy);

app.listen(9443);
