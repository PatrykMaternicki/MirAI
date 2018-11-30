const Logger = require('../../Commons/Logger');

class Filter {
  constructor(config) {
    this.config = config;
    this.logger = new Logger();
    this.connector = require('request');
    this.siteMaps = [];
  }

  run() {
    return new Promise( (resolve, reject) => {
      this.connector.get(`${this.config.site}/${this.config.wanted_file}`,
      (err,httpResponse,body) => resolve (this.read(body, err)));
      });
  }

  read(body, err) {
    if (err) {
      this.logger.print("siteNotFound", this.config.site);
    }

    this.logger.info('Finding robots.txt');
    if (this.siteMaps.length === 0) {
      this.filterArray(body);
      this.siteMapExist() ? this.getSitemapURL() : this.setError();
      return this.siteMaps;
    }
  }

  filterArray(content) {
    let contentArr =  content.split('\n');
    for (let i = 0; i < contentArr.length; i++) {
      if (this.isSiteMap(contentArr[i])) {
        this.siteMaps.push(contentArr[i])
      }
    }
  }

  isSiteMap(row) {
    return new RegExp('Sitemap').test(row);
  }

  siteMapExist() {
    return this.siteMaps.length > 0;
  }

  getSitemapURL() {
    this.siteMaps = this.siteMaps.map( content => content.split('Sitemap:')[1]);
  }

  setError() {
    this.logger.print("sitemapDoesntExist", this.config.site);
  }
}

module.exports = Filter;
