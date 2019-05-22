const jwt = require('jsonwebtoken');

module.exports.jwtSign = function(payload){
  try{
    return jwt.sign({payload}, 'myPassword');
  }catch(e){
    throw new Error(e);
  }
}

module.exports.jwtVerify = function(token){
  try{
    const decoded = jwt.verify(token, 'myPassword');
    return decoded;
  }catch(e){
    throw new Error(e);
  }
}