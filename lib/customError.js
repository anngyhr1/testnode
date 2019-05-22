const customError = (message, method, statusCode, err) => {
  
  const e = new Error();
  e.message = message;
  e.method = method;
  e.statusCode = statusCode;
 // e.stack = err? err.stack; 
  e.original = err;
// console.log(e);
  return e;
}

module.exports.customError = customError;