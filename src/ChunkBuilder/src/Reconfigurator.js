const Logger = require('../../Commons/Logger');
const StrategyCreator = require('./StrategyCreator');
const defaultStrategyConfig = require ('../config');2

class Reconfigurator {
  constructor(config) {
    this.config = config;
    this.logger = new Logger();
    this.StrategyCreator = new StrategyCreator(defaultStrategyConfig);
  }

  run(data) {
    this.logger.info('Reconfigurator running');
    return this.isDefineStrategy() ? this.config : this.prepareStrategy(data);
  }

  prepareStrategy(data) {
    this.logger.info('prepare strategy');
    this.config = this.StrategyCreator.createStrategy(data, this.config);
    this.logger.info('Chunk size: ' + this.config.chunkSize);
    return this.config;
  }

  isDefineStrategy() {
    return this.config['strategy'];
  }
}

module.exports = Reconfigurator;
