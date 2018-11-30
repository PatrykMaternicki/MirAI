class WrongTypeFieldException {
  constructor(field, typeExcept, fieldValue) {
    this.typeField = typeof field;
    this.msg = `WrongTypeFieldException!!! \n
      Field ${field} have wrong type ${typeof fieldValue}.
      Instead use ${typeExcept}`
  }

  show() {
    return this. msg;
  }
}

module.exports = WrongTypeFieldException;
