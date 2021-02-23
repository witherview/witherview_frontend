const createProxyMiddleware = require('http-proxy-middleware');

module.exports = (app) => {
  const socketProxy= createProxyMiddleware('/socket', {
    target: 'http://localhost:8000', // 서버 Url
    changeOrigin: true,
    ws: true, 
    logLevel: 'debug',
  });

  app.use(socketProxy);
};