// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function(app){
//     app.use(
//         ['/api', '/api/*'],
//         createProxyMiddleware({ target: "http://localhost:8000" })
//     )
// }

const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/api/*', {
            target: 'http://localhost:8000/',
            secure: false,
        }),
    );
};
