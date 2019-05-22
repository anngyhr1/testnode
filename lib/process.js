const {connection} = require('./conection');
const {customError} = require('./customError');
const uuid = require('shortid');

uuid.characters('0123456789abcdefghijklmn@opqrstuvwxyzABCDEFGHIJKLMN&OPQRSTUVWXYZ');

const insert = async (body) => {

try{
  let idItem = uuid.generate();

  const course = {
    id: idItem,
    name: body.name,
    idUsuario: body.idUsuario
  };

  const db = await connection();
  let r = await db.collection('test').insertOne(course);

  res = {
    body:'course insertado',
    code:200
  }

  return res;
}catch(e){
  throw customError('Error insert', 'insert', 400, e);
}
  
}

const getAll = async () => {

try{
  const db = await connection();
      
  const col = await db.collection('test');
  const rows = await col.find().toArray();
      
  res = {
    body: rows,
    code: 200
  };

  return res;
  }catch(e){
    const er= customError('Error getAll', 'getAll', 400, e);
    console.log(er);
    throw er;
  }
}

const findOne = async (body) => {

  try{

    var db = await connection();
    let col = await db.collection('test');
    r = await col.findOne({id : body.user._id});

    res = {
      body: r,
      code: 200
    };
  
    return res;
  }catch(e){
    throw customError('Error findOne', 'findOne', 400, e);
  }

}

const deleteOne = async (body) => {

try{

  var db = await connection();
  let col = await db.collection('test');
  r = await col.findOneAndDelete(body);
  
  res = {
    body: r,
    code: 200
  };

  return res;

}catch(e){
    throw customError('Error delete', 'delete', 400, e);
  }
}

const putOne = async (body) => {

  obj = {"id" : body.id};
  console.log(obj);
  console.log(body);

  const db = await connection();
  let col = await db.collection('test');
  r = await col.findOneAndUpdate(obj, {$set: body});

  res = {
    body: r,
    code: 200
  };
  
  return res;

}

module.exports.insert = insert;
module.exports.getAll = getAll;
module.exports.findOne = findOne;
module.exports.deleteOne = deleteOne;
module.exports.putOne = putOne;