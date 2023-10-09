const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  try{
    app.use(
      ['/api', '/auth/google'],
      createProxyMiddleware({
        target: 'http://localhost:5000',
      })
    );
  }
  catch(err){
    console.log(err);
 }
};
