const FolderControler = require('./src/FolderControler');

class SourceDataPicker {
  constructor() {
    this.FolderControler = new FolderControler();
  }

  getStockScreenshots() {
    return new Promise((resolve, reject) => {
      this.FolderControler.getMaxStockScreenshots().then((value) => resolve(value));
    })
  }
}

module.exports = SourceDataPicker;
