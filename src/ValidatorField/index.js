const Logger = require('../Commons/Logger');

class Validator {
  constructor() {
    this.fieldDictionary = require('./dictionary');
    this.logger = new Logger();
    this.config = {};
  }

  valid(config) {
    this.config = config;
    for (let field in config) {
      this.isRequired(field, this.fieldDictionary[field]);
      this.isCorrectType(field, this.fieldDictionary[field]);
    }
  }

  isRequired(key, configField) {
    if (configField.required && this.config[key].toString().length < 1) {
      this.logger.print('requiredField', key);
    }
  }

  isCorrectType(key, configField) {
    if (typeof this.config[key] !== configField.type) {
     this.logger.print('wrongTypeField', key, configField.type, this.config[key]);
    }
  }
}



module.exports = Validator;
