const getSize = require('get-folder-size');

class FolderControler {
  constructor(config) {
    this.config = config;
  }

  isMaxSizeFolder() {
    return new Promise((reject, resolve) => {
      getSize('C:\\Users\\pmaternicki\\Documents\\git\\MirAI\\screenshots', (err, size) => {
        if (err) { throw err; }
        reject(size >= this.config.max_size_folder ? true : false);
      });
    });
  }
}

module.exports = FolderControler;
