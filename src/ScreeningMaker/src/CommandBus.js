const Logger = require('../../Commons/Logger');

class CommandBus {
  constructor(config) {
    this.browser = {}
    this.logger = new Logger();
    this.config = config;
  }

  run(browser) {
    this.browser = browser;
    return new Promise ((reject, resolve) => {
      this.runNewPage().then(() => reject(true))
    });
  }

  runNewPage() {
    return new Promise((reject, resolve) => {
      this.browser.newPage().then(page => {
        this.page = page;
        reject(true);
      });
    })
  }

  runMakeScreen(link) {
    let i = 0;
    let isEmpty = false;
    let maxStock = this.config.max_screenshots ? this.config.max_screenshots : link.length;
    (async () => {
      while (!isEmpty) {
        if (!this.isStockScreensIsMax(i, maxStock)) {
          await this.page.goto(link[i]);
          await this.page.setViewport({width: 5600, height: 5000});
          await this.page.evaluate(() => document.querySelector('#cross-dialog').remove());
          await this.page.screenshot({path: `screenshots/${i}.png`, fullPage: true});
          i++;
          await this.logger.info(`Screen made: ${i} / ${maxStock} `);
        } else {
          this.logger.info('Screen complete');
          isEmpty = true;
        }
      }
    })();
  }

  isStockScreensIsMax(size, maxSize) {
    return size === maxSize;
  }
}

module.exports = CommandBus;
