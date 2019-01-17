const Crawler = require('./Crawler');
const ValidatorField = require('./ValidatorField');
const Logger = require('./Commons/Logger/');
const ChunkBuilder = require('./ChunkBuilder');
const StrategyBuilder = require('./StrategyBuilder');
const SystemChecker = require('./SystemChecker');
const Picker = require('./Picker');
const ScreeningMaker = require('./ScreeningMaker');
const ConfigLoader = require('./ConfigLoader');
const CacheLoader = require('./CacheLoader');

class MirAI {
  constructor(config) {
    this.config = new ConfigLoader(config).loadConfig();
    this.Crawler = new Crawler(this.config);
    this.logger = new Logger();
    this.ChunkBuilder = new ChunkBuilder(this.config);
    this.ValidatorField = new ValidatorField();
    this.StrategyBuilder = new StrategyBuilder();
    this.ScreeningMaker = new ScreeningMaker(this.config);
    this.SystemChecker = new SystemChecker();
    this.Picker = new Picker();
    this.CacheLoader = new CacheLoader();
    this.init();
  }

  init() {
    this.logger.info('MirAI running');
    this.ValidatorField.valid(this.config);
    this.config.os_system = this.SystemChecker.checkSystem();
    this.logger.info('Validate field complete');
    if (this.cacheIsActive() && this.config.cache) {
      this.runScreenMaker(this.CacheLoader.getCache());
    } else {
      this.runCrawler();
    }
  }

  runScreenMaker(linksList) {
    this.ScreeningMaker.run(linksList);
  }

  runCrawler() {
    this.Crawler.run().then(urls => {
      let chunks = this.ChunkBuilder.run(urls);
      this.config =  this.ChunkBuilder.config;
      this.config = this.StrategyBuilder.run(this.config);
      let linksList = this.Picker.run(chunks, this.config);
      if (!this.cacheIsActive() && this.config.cache) {
        this.CacheLoader.setCache(linksList);
        this.CacheLoader.setActiveCache(true);
      }
      this.runScreenMaker(linksList);
    });
  }

  cacheIsActive() {
    return this.CacheLoader.isActiveCache();
  }
}

module.exports = MirAI;
