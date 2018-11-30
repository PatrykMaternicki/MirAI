const Logger = require('../../Commons/Logger');
const DOMParser = require('xmldom').DOMParser;
const PromisesFactory = require('../../Commons/PromisesFactory');

class XMLReader {
  constructor(config) {
    this.config = config;
    this.logger = new Logger();
    this.promisesFactory = new PromisesFactory();
    this.connector = require('request');
    this.xmlLinkList = [];
    this.articlesList = [];
    this.promises = [];
    this.xmlPromises = [];
    this.completeReadSitemap = 0;
  }

  run(urls) {
      return new Promise( (resolve, reject) => {
          this.connector.get(urls[0], (err,httpResponse,body) => {
            this.logger.info('Reading sitemap');
            this.initProcesing(body, err, urls[0]);
            Promise.all(this.xmlPromises).then(() => resolve(this.articlesList));
          });
        });
  }

  initProcesing(body, err, url) {
    this.startProcesing(body, err, url);
  }

  startProcesing(body, err, url) {
    if (err) {
      this.logger.print("xmlSitemapNotFound", url);
    }

    this.read(body);

    if (this.sitemapIncludesAnotherSitemaps()) {
      this.xmlLinkList.length = this.loadSizeSiteMap();
      this.logger.info('Size sitemaps: ' + this.xmlLinkList.length);
      for (let i = 0; i < this.xmlLinkList.length; i++) {
        this.xmlPromises.push(new Promise( (resolve, reject) => {
          this.connector.get(this.xmlLinkList[i], (err,httpResponse,body) => {
            this.logger.info('Read sitemap: ' + this.xmlLinkList[i]);
            this.completeReadSitemap++;
            this.logger.info('Complete read: ' + this.completeReadSitemap + '/' + this.xmlLinkList.length);
            this.read(body, err, this.xmlLinkList[i]);
            resolve();
          })
        }));
      }
      Promise.all(this.xmlPromises).then(() => this.logger.info('Urls: ' + this.articlesList.length));
    }
  }

  read(body) {
    this.urlAgregators = new DOMParser()
      .parseFromString(body)
      .getElementsByTagName('loc');

    for (let i = 0; i < this.urlAgregators.length; i++) {
      let link = this.urlAgregators[i].textContent;
      this.isXMLUrl(link) ? this.pushToXmlUrlSitemaps(link) : this.pushToArticlesList(link);
    }
  }

  sitemapIncludesAnotherSitemaps() {
    return this.xmlLinkList.length !== 0;
  }

  loadSizeSiteMap() {
    if (!this.config.sizeSitemap) {
      return this.xmlLinkList.length;
    } else {
      return this.isPosibleSitemapSize();
    }
  }

  isPosibleSitemapSize() {
    if (this.config.sizeSitemap > this.xmlLinkList.length) {
      this.logger.print("tooLengthSitemap", this.xmlLinkList.length);
    }
    return this.config.sizeSitemap;
  }

  pushToArticlesList(url) {
    this.articlesList.push(url);
  }

  pushToXmlUrlSitemaps(url) {
    this.xmlLinkList.push(url);
  }

  isXMLUrl(url) {
    return new RegExp('.xml').test(url);
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

module.exports = XMLReader;
