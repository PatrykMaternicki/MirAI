const chunkBuilder = require('chunk');
const Logger = require('../../Commons/Logger');

class Builder {
  constructor() {
    this.Logger = new Logger();
  }

  buildChunks(data, config) {
    let chunkList = chunkBuilder(data, config.chunkSize);
    this.Logger.info('Chunk stock ' + chunkList.length);
    return chunkList;
  }
}

module.exports = Builder;
