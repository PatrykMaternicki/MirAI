const List = require('../model/List');

class Parser {

  parseToJSON(stringfile) {
    let json = {
      'links': []
    };

    stringfile.forEach(
      (row) => {
        json.links.push(row[2]);
    });

    json.date = new Date();
    return json;
  }

  splitToObject(object) {
    let newObject = List;
    newObject.id = object[0];
    newObject.date = object[1];
    newObject.link = object[2];
    return newObject;
  }
}

module.exports = Parser;
