
const Reconfigurator = require('./src/Reconfigurator');
const Logger = require('../Commons/Logger');
const Builder = require('./src/Builder');

class ChunkBuilder {
  constructor(config) {
    this.config = config;
    this.Logger = new Logger();
    this.Reconfigurator = new Reconfigurator(config);
    this.builder = new Builder();
  }

  run(data) {
    this.config = this.Reconfigurator.run(data);
    this.Logger.info('Prepare chunks');
    return this.builder.buildChunks(data, this.config);
  }
}

module.exports = ChunkBuilder;
