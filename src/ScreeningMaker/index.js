const Logger = require('../Commons/Logger');
const puppeteer = require('puppeteer');
const CommandBus = require('./src/CommandBus');

class ScreeningMaker {
  constructor(config) {
    this.logger = new Logger();
    this.CommandBus = new CommandBus(config);
  }

  run(links) {
    this.logger.info('Screening Maker starting');
    puppeteer.launch().then((browser) =>
    this.CommandBus.run(browser).then(() => this.makeScreen(links)));
  }

  makeScreen(links) {
    this.CommandBus.runMakeScreen(links);
  }
}

module.exports = ScreeningMaker;
