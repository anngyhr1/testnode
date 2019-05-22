const {info} = require('../startup/logging');

module.exports = function (req, res, next){
  info({
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
      res: res.locals
    });
    
    const code = res.locals.code || 200;
    
    res.status(code).send(res.locals.body);
}