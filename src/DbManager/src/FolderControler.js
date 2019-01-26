const fs = require('fs');
const jsonReader = require('jsonfile');
const path = require('path');
class FolderControler {
  async isFileExist() {
    return new Promise((resolve, reject) => {
      fs.readdir(path.resolve(__dirname + '/../../../file/'), (err, file) => {
        resolve(file.length > 0);
      });
    });
  }

  async save(json) {
    console.log(path.resolve());
    await this.createFile();
    await jsonReader.writeFile(path.resolve(__dirname + '/../../../file/') + this.nameFile, json, function (err) {
      if (err) console.error(err)
    });
  }

  async createFile() {
    this.nameFile = this.prepareNameFile();
    await fs.appendFile(path.resolve(__dirname + '/../../../file/' + this.nameFile), '', (err) => {
      if (err) throw err;
      return true;
    });
  }

  async loadFile() {
    console.log('path',path.resolve(__dirname));
    this.nameFile = this.prepareNameFile();
    return new Promise((resolve, reject) => {
      jsonReader.readFile(path.resolve(__dirname + '/../../../file/' + this.nameFile), function (err, obj) {
        let filteredObject = [];
        if (err) console.error(err)
        obj.links.forEach(row => filteredObject.push(row.link))
        resolve(filteredObject);
      });
    });
  }

  prepareNameFile() {
    let date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' });
    return date.getDate() + month + '-' +  date.getFullYear()  + '.json';
  }

}

module.exports = FolderControler;
