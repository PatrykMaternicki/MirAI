class WrongTypeFieldException {
  constructor(realDataLength) {
    this.msg = `TooLengthException!!! \n
      In config length is too long.
      Sitemap length is ${realDataLength}`
  }

  show() {
    return this. msg;
  }
}

module.exports = WrongTypeFieldException;
