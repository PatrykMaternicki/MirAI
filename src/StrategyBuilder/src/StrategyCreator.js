const Logger = require('../../Commons/Logger');

class StrategyCreator {
  constructor() {
    this.logger = new Logger();
    this.strategyTypeEnum = require('./dictionary/StrategyEnum');
  }

  prepareStrategy(config) {
    let strategy = {};
    this.logger.info('Strategy Prepare');
    strategy.typeStrategy = this.pickTypeStrategy();
    this.logger.info('Pick strategy: ' + strategy.typeStrategy);
    strategy.pickLink = this.preparePickLink(config.chunkSize);
    this.logger.info('Pick max link in one chunk: ' + strategy.pickLink);
    return strategy;
  }

  pickTypeStrategy() {
    let randomIndexes = Math.floor(Math.random() * Math.floor(this.strategyTypeEnum.length));
    return this.strategyTypeEnum[randomIndexes];
  }

  preparePickLink(maxChunkStock) {
    return Math.floor(Math.random() * Math.floor(maxChunkStock));
  }
}

module.exports = StrategyCreator;
