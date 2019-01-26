const Logger = require('../Commons/Logger');
const ServerContainer = require('./src/ServerContainer');
const BrowserLauncher = require('./src/BrowserLauncher');
const Bundler         = require('./src/Bundler');

class ApplicationServer {
  constructor() {
    this.logger = new Logger();
    this.ServerContainer = new ServerContainer();
    this.BrowserLauncher = new BrowserLauncher();
    this.Bundler = new Bundler();
  }

  start() {
    (async () => {
      await this.logger.info('Build Application');
      await this.Bundler.startWebpack();
      await this.logger.info('Run Server Application');
      await this.ServerContainer.startExpress();
      await this.logger.info('Server started');
      await this.logger.info('Start browser');
      await this.BrowserLauncher.launchBrowser();
    })();
  }
}

module.exports = ApplicationServer;
