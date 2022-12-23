const { createProxyMiddleware } = require('http-proxy-middleware');

module.export = app => {
    app.use('/api/login', 
        createProxyMiddleware({ 
            target: 'https://burger-app-api.onrender.com', 
            changeOrigin: true }));
}