const StrategyCreator = require('./src/StrategyCreator');

class StrategyBuilder {
  constructor() {
    this.StrategyCreator = new StrategyCreator();
  }

  run(config) {
    return this.strategyIsDefine(config) ? config.strategy : this.StrategyCreator.prepareStrategy(config);
  }

  strategyIsDefine(config) {
    return config['strategy'] ? true : false;
  }
}

module.exports = StrategyBuilder;
