const chalk = require('chalk');
const Factory = require('./src/ExceptionFactory');
const error = chalk.bold.red;
const info = chalk.bold.yellow;

class Logger {
  constructor() {
    this.exceptionFactory = new Factory();
  }

  print(typeException, value) {
    throw new Error(error(this.exceptionFactory.prepare(typeException, value).show()))
  }

  print(typeException, value, exceptType, fieldValue) {
   throw new Error(error(this.exceptionFactory.prepare(typeException, value, exceptType, fieldValue).show()));
  }

  info(text) {
    console.log(info(text));
  }
}
module.exports = Logger;
