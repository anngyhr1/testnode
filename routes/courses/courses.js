const express = require('express');
const {info, error} = require('../../startup/logging');
const {jwtSign, jwtVerify} = require('../../lib/authentication');
const {auth} = require('../../middleware/auth');

const {insert, getAll, findOne, deleteOne, putOne} = require('../../lib/process.js');
const router = express.Router();


router.get('/', async (req, res ,next) => {
    
    try {
      
      res.locals = await getAll();

      next();
      
  }catch(ex){
    next(ex);
  }
});

router.post('/add', auth, async (req, res, next) => {

  try{

  res.locals = await insert(req.body);

  next();

  } catch(e) {
    next(e); 
  }
});

router.get('/findOne', auth, async (req, res, next) => {

    try{

    res.locals = await findOne(req.body);

    next();

  } catch(e) {
    next(e); 
  }
});

router.delete('/' , auth, async (req, res, next) => {
try {

  res.locals = await deleteOne(req.body);
  
  next();
 }catch(e){
    next(e);
  }
});

router.put('/', auth, async (req, res, next) => {

  try {

    res.locals = await putOne(req.body);

    next();
  }catch(e){
    next(e);
  }

});



module.exports = router;