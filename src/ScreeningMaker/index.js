const Logger = require('../Commons/Logger');
const puppeteer = require('puppeteer');

class ScreeningMaker {
  constructor() {
    this.logger = new Logger();
  }

  run(links) {
    this.logger.info('Screening Maker starting');
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(links[12]);
      await page.screenshot({path: 'screenshots/example.png'});
    })();
  }
}

module.exports = ScreeningMaker;
