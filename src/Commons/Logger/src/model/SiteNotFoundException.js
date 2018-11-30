class NotFoundSiteException {
  constructor(site) {
    this.msg = `NotFoundSiteException!!! \n Site ${site} is doenst exist`
  }

  show() {
    return this. msg;
  }
}

module.exports = NotFoundSiteException;
