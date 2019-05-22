const jwt = require('jsonwebtoken');
const {customError} = require('../lib/customError');

function auth(req, res, next){

  const token = req.header('x-auth-token');
  if(!token) return res.status(401).send('access denied. No token provided');

  try{
    const decoded = jwt.verify(token, 'myPassword');
    req.user = decoded;
    next();
  }catch(ex){
    const e = customError('Token invalido', 'auth', 401, ex); 
    next(e);
  }
}

module.exports.auth = auth;