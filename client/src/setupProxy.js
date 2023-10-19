const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  try{
    app.use(
      ['/api', '/auth/google'],
      createProxyMiddleware({
        target: process.env.DOMIAN,
      })
    );
  }
  catch(err){
    console.log(err);
 }
};
