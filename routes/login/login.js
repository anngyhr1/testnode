const express = require('express');
const {info} = require('../../startup/logging');
const {jwtSign, jwtVerify} = require('../../lib/authentication');
const router = express.Router();

router.post('/auth', async (req, res, next) => {

  try{
  payload = {
    name: req.body.name,
    idUsuario: req.body.idUsuario
  };

  const token = jwtSign(payload);
  console.log(token);
  res.locals = {
    body:token,
    code:200
  }
  next();

  }catch(e){
  throw customError('Error em autenticacion', 'auth', 400, e);
}
});

module.exports = router;