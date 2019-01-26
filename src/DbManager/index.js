const taffy = require('taffy');
const db = require('./db/LinksDatabase');
const LinksService = require('./src/LinksService');
const FolderControler = require('./src/FolderControler');
const Parser = require('./src/Parser');

class DbManager {
  constructor(config) {
    this.config = config;
    this.FolderControler = new FolderControler();
    this.linksService = new LinksService(taffy('[]'));
    this.Parser = new Parser();
    this.db = {};
  }

  async fileExist() {
    return new Promise ((resolve, reject) => {
      this.FolderControler.isFileExist().then(value => {
        resolve(value);
    });
  });
}
  async load() {
    return new Promise((resolve, reject) => {
      this.FolderControler.loadFile().then(value => resolve(value));
    });
  }

  saveToFile() {
    this.FolderControler.save(this.Parser.parseToJSON(this.linksService.readAll()));
  }

  save(links) {
    this.linksService.setLinks(links);
  }
}

module.exports = DbManager;
