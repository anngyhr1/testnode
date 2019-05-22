var MongoClient = require('mongodb').MongoClient;

async function connection() {

  if(typeof db !== 'undefined'){
    return db;
  }
  
  client = await MongoClient.connect("mongodb+srv://ann:123@cluster0-ombfh.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
  db = client.db('dbprueba');
  return db; 

}

module.exports.connection = connection;
