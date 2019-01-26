const chromeLauncher = require('chrome-launcher');

class BrowserLauncher {
  constructor(){
  }

  async launchBrowser() {
    return new Promise((resolve, reject) => {
      chromeLauncher.launch({
        startingUrl: 'http://localhost:8100'
      }).then(chrome => {
        resolve(true);
      });
    })
  }
}

module.exports = BrowserLauncher;
