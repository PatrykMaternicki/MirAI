class XmlSitemapNotFound {
  constructor(url) {
    this.msg = `XmlSitemapNotFound!!! \n In url ${url} sitemap doesnt exist`
  }

  show() {
    return this. msg;
  }
}

module.exports = XmlSitemapNotFound;
