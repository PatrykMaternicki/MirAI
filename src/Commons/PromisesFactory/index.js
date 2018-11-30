class PromisesFactory {
  constructor() {
    this.connector = require('request');
  }

  prepare(urls) {
    return new Promise( (resolve, reject) =>
      this.connector.get(urls, (err,httpResponse,body) => resolve(err, body)));
  }
}

module.exports = PromisesFactory;
