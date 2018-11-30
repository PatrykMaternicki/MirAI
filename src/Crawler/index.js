
const Filter = require('./src/Filter');
const XMLReader = require('./src/XMLReader');
const logger = require('../Commons/Logger/');

class Crawler {
  constructor(config) {
    this.config = config;
    this.filter = new Filter(config);
    this.xmlReader = new XMLReader(config);
    this.logger = new logger();
    this.promises = [];
  }

  run() {
    this.logger.info('Crawler running');
    return new Promise( (reject, resolve) => {
      this.filter.run().then(urls => this.xmlReader.run(urls).then(urls => reject(urls)));
    })
  }
}

module.exports = Crawler;
