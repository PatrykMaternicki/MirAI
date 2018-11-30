class SitemapDoesntExistException {
  constructor(site) {
    this.msg = `SitemapDoesntExistException!!! \n Row with sitemap url is doenst exist in site ${site}`
  }

  show() {
    return this. msg;
  }
}

module.exports = SitemapDoesntExistException;
