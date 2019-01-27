const fs = require('fs');
const jsonReader = require('jsonfile');
const path = require('path');
class FolderControler {
  async isFileExist() {
    return new Promise((resolve, reject) => {
      this.nameFile = this.prepareNameFile();
      jsonReader.readFile(path.resolve(__dirname + '/../../../file/' + this.nameFile), (err, obj) => {
        if (err) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }

  async save(json) {
    await jsonReader.writeFile(path.resolve(__dirname + '/../../../file/' + this.nameFile), json, function (err) {
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
    this.nameFile = this.prepareNameFile();
    return new Promise((resolve, reject) => {
      jsonReader.readFile(path.resolve(__dirname + '/../../../file/' + this.nameFile), function (err, obj) {
        resolve(obj.links);
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
