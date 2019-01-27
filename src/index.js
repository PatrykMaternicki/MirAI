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
const DbManager = require('./DbManager');
const ModelCreator = require('./ModelCreator');
const ApplicationServer = require('./ApplicationServer');
const SourceDataPicker = require('./SourceDataPicker');

class MirAI {
  constructor(config) {
    this.config = new ConfigLoader(config).loadConfig();
    this.initConfig = new ConfigLoader(config).loadConfig();
    this.Crawler = new Crawler(this.config);
    this.logger = new Logger();
    this.ChunkBuilder = new ChunkBuilder(this.config);
    this.ValidatorField = new ValidatorField();
    this.StrategyBuilder = new StrategyBuilder();
    this.ScreeningMaker = new ScreeningMaker(this.config);
    this.SystemChecker = new SystemChecker();
    this.DbManager = new DbManager(this.config);
    this.Picker = new Picker();
    this.CacheLoader = new CacheLoader();
    this.ModelCreator = new ModelCreator();
    this.ApplicationServer = new ApplicationServer();
    this.SourceDataPicker = new SourceDataPicker();
    this.init();
  }

  init() {
    this.logger.info('MirAI running');
    this.ValidatorField.valid(this.config);
    this.config.os_system = this.SystemChecker.checkSystem();
    this.logger.info('Validate field complete');

    (async () => {
      if (await this.DbManager.fileExist()) {
        this.runScreenMaker(await this.DbManager.load());
      } else {
        this.runCrawler();
      }
    })();
  }

  runScreenMaker(linksList) {
    (async () => {
      this.ScreeningMaker.run(linksList).then(
        values => {
          this.logger.info('Get data source from screenshots folder');
          this.SourceDataPicker.getStockScreenshots().then(
            value => {
              this.ApplicationServer.feedData(linksList, value);
              this.ApplicationServer.start();
            });
        });
    })();
  }

  runCrawler() {
    this.Crawler.run().then(urls => {
      let chunks = this.ChunkBuilder.run(urls);
      this.config =  this.ChunkBuilder.config;
      this.config = this.StrategyBuilder.run(this.config);
      let linksList = this.Picker.run(chunks, this.config);

      if (!this.cacheIsActive() && this.initConfig.cache) {
        this.DbManager.save(linksList);
        this.DbManager.saveToFile();
      }
    });
  }

  cacheIsActive() {
    return this.CacheLoader.isActiveCache();
  }
}

module.exports = MirAI;
