const getSize = require('get-folder-size');
const path = require('path');
class FolderControler {
  constructor(config) {
    this.config = config;
  }

  isMaxSizeFolder() {
    return new Promise((reject, resolve) => {
      getSize(path.resolve(__dirname + '/../../ApplicationServer/dist/images/screenshots'), (err, size) => {
        if (err) { throw err; }
        reject(size >= this.config.max_size_folder ? true : false);
      });
    });
  }
}

module.exports = FolderControler;
