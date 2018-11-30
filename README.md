# MirAI

## How to start?
1. Run method:
``
npm install
``
2. Then run this method:
``
npm run init
``
3. Use this code.
``
const MirAI = require('./src');

const config = {
  "site" : "http://budzetalert.pl",
  "wanted_file": "robots.txt",
  "sizeSitemap": 1,
  "chunkSize": 50,
  "strategy": {
    "typeStrategy" : "random",
    "pickLink": 3
  }
};

function run() {
  new MirAI(config);
}

run();
``
4. enjoy
