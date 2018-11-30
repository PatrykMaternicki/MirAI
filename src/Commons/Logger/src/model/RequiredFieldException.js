class RequiredFieldException {
  constructor(field) {
    this.msg = `RequiredFieldException!!! \n Field ${field} is required`
  }

  show() {
    return this. msg;
  }
}

module.exports = RequiredFieldException;
