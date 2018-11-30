class StrategyCreator {
  constructor(config) {
    this.config = config;
  }

  createStrategy(data, config) {
    config.chunkSize = this.isPosibleChunkSize(data) ? this.createChunkSize(data) : this.config.chunkSize;
    return config;
  }

  isPosibleChunkSize(data) {
    return data.length < this.config.chunkSize
  }

  createChunkSize(data) {
    let sum = data.length/ this.config.chunkSize;

    if (sum > 1) {
      return parseInt(sum);
    }

    this.config.chunkSize --;
    return this.createChunkSize(data);
  }
}

module.exports = StrategyCreator;
