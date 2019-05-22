const {error} = require('../startup/logging');

module.exports = function (err, req, res, next){
  error({
      error: err,
      stack: err.stack, 
      headers: req.headers, 
      body: req.body, 
      baseUrl: req.baseUrl,
      hostname: req.hostname,
      method: req.method,
      originalUrl: req.originalUrl,
      params: req.params,
      path: req.path,
      query: req.query,
      route: req.route,
      file: req.files
    });
    
    const code = err.statusCode || 500;
    const message = err.statusCode ? err.message : 'Error no Servidor, tenta novamente';
    res.status(code).send(message);
}