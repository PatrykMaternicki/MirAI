const Logger = require('../Commons/Logger');

class Picker {
  constructor() {
    this.logger = new Logger();
    this.pickedNumber = [];
  }

  run(chunks, strategy) {
    this.logger.info('Picking links')
    let pickedLinks = [];

    for (let i = 0; i < chunks.length; i++) {
      for (let c = 0; c < strategy.pickLink; c++) {
        pickedLinks.push(this.pickRandomLink(chunks[i]));
      }
      this.pickedNumber = [];
    }

    return pickedLinks;
  }

  pickRandomLink(chunk) {
    let isNotSame = false;
    let pickNumber = Math.floor(Math.random() * Math.floor(chunk.length))

    while(this.isSameNumber(pickNumber)) {
      pickNumber = Math.floor(Math.random() * Math.floor(chunk.length))
    }

    this.pickedNumber.push(pickNumber);
    return chunk[pickNumber];
  }

  isSameNumber(pickNumber) {
    for (let x = 0; x < this.pickedNumber.length; x++) {
      if (x === pickNumber) {
        return true;
      }
    }

    return false;
  }
}

module.exports = Picker;
