const Logger = require('../Commons/Logger');
const puppeteer = require('puppeteer');
const CommandBus = require('./src/CommandBus');

class ScreeningMaker {
  constructor(config) {
    this.logger = new Logger();
    this.CommandBus = new CommandBus(config);
  }

  async run(links) {
    return new Promise((resolve, reject) => {
      this.logger.info('Screening Maker starting');
      puppeteer.launch().then((browser) =>
      this.CommandBus.run(browser).then(() => this.makeScreen(links).then(value=>resolve(value))));
    })
  }

  async makeScreen(links) {
    return new Promise((resolve, reject) => {
      this.CommandBus.runMakeScreen(links).then(value => resolve(value));
    });
  }
}

module.exports = ScreeningMaker;
