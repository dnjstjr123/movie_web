const { createProxyMiddleware } = require("http-proxy-middleware");

export default function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
      pathRewrite: { "^/api/": "/" },
    })
  );
}
