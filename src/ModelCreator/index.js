const Logger = require('../Commons/Logger');
const tensorflow = require('@tensorflow/tfjs');
const cocoSsd = require ('@tensorflow-models/coco-ssd');

class ModelCreator {

  constructor() {
    this.logger = new Logger();
  }

  init() {
    this.logger.info('Start modeling');
    cocoSsd.load()
  .then(model => model.detect('C:\\Users\\pmaternicki\\Documents\\git\\MirAI\\screenshots\\3.png'))
  .then(predictions => console.log(predictions))
  }
}


module.exports = ModelCreator;
