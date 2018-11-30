const requiredFieldException = require('./model/RequiredFieldException');
const wrongTypeFieldException = require('./model/WrongTypeFieldException');
const siteNotFoundException = require('./model/SiteNotFoundException');
const sitemapDoesntExistException = require('./model/SitemapDoesntExistException');
const xmlSitemapNotFound = require('./model/xmlSitemapNotFound');
const tooLength = require('./model/TooLengthException');

class ExceptionFactory {
  constructor() {
    this.components = {
      'requiredField' : requiredFieldException,
      'wrongTypeField': wrongTypeFieldException,
      'siteNotFound': siteNotFoundException,
      'sitemapDoesntExist' : sitemapDoesntExistException,
      'xmlSitemapNotFound' : xmlSitemapNotFound,
      'tooLengthSitemap' : tooLength,
    }
  }

  prepare(typeException, msg, exceptType, fieldValue) {
    return new this.components[typeException](msg, exceptType, fieldValue);
  }
}

module.exports = ExceptionFactory;
