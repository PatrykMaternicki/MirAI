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
```sh
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
```
4. enjoy

## Configuration:
  - Site: **Require**. The Site, which crawler should be taken a link.
  - wanted_file: **Require**. The file where link to sitemap is include.
  -sizeSiteMap: **Optional** When sitemap have a include another sitemap, then use sizeSiteMap to decide how deep crawler running. Default is max.
  - chunkSize: **Optional**. Maximum amount links in one chunk. Default number is generate.
  - strategy: **Optional**. Wchich strategy program have to use. Default is generate.
    - typeStrategy - How a Picker have to take pick links. Default is generate.
    - pickLink - How much links pick in one chunk. Default is generate. **The field pickLink doesnt allowed to bigger than length chunk**
  
  
