const MirAI = require('./src');

function run() {
  new MirAI(require('./config/config.json'));
}

run();
