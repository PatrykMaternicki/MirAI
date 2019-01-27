const Logger = require('../../Commons/Logger');
const FolderControler = require('./FolderControler');

class CommandBus {
  constructor(config) {
    this.browser = {}
    this.logger = new Logger();
    this.folderControler = new FolderControler(config);
    this.config = config;
    this.isEmpty = false;
    this.maxStock = '';
    this.i = 0;
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

  async runMakeScreen(link) {
    return new Promise((resolve, reject) => {
      this.maxStock = this.config.max_screenshots ? this.config.max_screenshots : link.length;
      (async () => {
        while (!this.isEmpty) {
          if (!this.isStockScreensIsMax(this.i, this.maxStock)) {
            if (await this.runCommandSizeFolder()) {
              this.logger.info('Folder have maximum size');
              this.isEmpty = true;
              process.exit(0);
            }
            await this.page.goto(link[this.i]);
            await this.page.setViewport({width: 5600, height: 5000});
            await this.page.evaluate(() => document.querySelector('#cross-dialog').remove());
            await this.page.screenshot({path: `src/ApplicationServer/dist/images/screenshots/${this.i}.png`, fullPage: true});
            this.i++;
            await this.logger.info(`Screen made: ${this.i} / ${this.maxStock} `);
          } else {
            this.logger.info('Screen complete');
            this.isEmpty = true;
          }
        }
        resolve(true);
      })();
    });
  }

  async runCommandSizeFolder() {
    let promise = new Promise((resolve, reject) => {
      resolve(this.folderControler.isMaxSizeFolder());
    });
    return await promise;
  }

  isStockScreensIsMax(size, maxSize) {
    return size === maxSize;
  }
}

module.exports = CommandBus;
