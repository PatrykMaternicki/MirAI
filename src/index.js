const Crawler = require('./Crawler');
const ValidatorField = require('./ValidatorField');
const Logger = require('./Commons/Logger/');
const ChunkBuilder = require('./ChunkBuilder');
const StrategyBuilder = require('./StrategyBuilder');
const Picker = require('./Picker');
const ScreeningMaker = require('./ScreeningMaker');

class MirAI {
  constructor(config) {
    this.config = config;
    this.Crawler = new Crawler(config);
    this.logger = new Logger();
    this.ChunkBuilder = new ChunkBuilder(config);
    this.ValidatorField = new ValidatorField();
    this.StrategyBuilder = new StrategyBuilder();
    this.ScreeningMaker = new ScreeningMaker();
    this.Picker = new Picker();
    this.init();
  }

  init() {
    this.logger.info('MirAI running');
    this.ValidatorField.valid(this.config);
    this.logger.info('Validate field complete');
    this.Crawler.run().then(urls => {
      let chunks = this.ChunkBuilder.run(urls);
      this.config =  this.ChunkBuilder.config;
      this.config = this.StrategyBuilder.run(this.config);
      let linkForTest = this.Picker.run(chunks, this.config);
      this.ScreeningMaker.run(linkForTest);
    })
  }
}

module.exports = MirAI;
