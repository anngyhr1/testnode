const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;


class Logger {
  
  static getLogger() {
    return this._log;
  }

  static createLogger() {

    if(this._log) {
      return Logger.getLogger();
    }

    // loggerWinston
    this._log = createLogger({
      format: combine(
        timestamp(),
        format.json()
        ),
        transports: [
        new transports.Console({colorize: true, prettyPrint: true}),
        new transports.File({filename: 'uncaughtExceptions.log'})
      ]
    });

    return this._log;
  }
}



  // Log
module.exports.info = info;
function info( log ){
  const loggerWinston = Logger.createLogger();
	loggerWinston.info( JSON.stringify(log) );
}

// Log Error
module.exports.error = error;
function error( error ){
  const loggerWinston = Logger.createLogger();
	loggerWinston.error( JSON.stringify(error) );
}

module.exports.initLog = function(){

  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
}




