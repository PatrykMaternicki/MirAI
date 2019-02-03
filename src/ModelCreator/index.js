const Logger = require('../Commons/Logger');

class ModelCreator {

  constructor() {
    this.logger = new Logger();
  }

  init() {
    this.logger.info('Start modeling');
  }
}


module.exports = ModelCreator;
