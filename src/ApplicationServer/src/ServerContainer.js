// server.js
const express             = require('express');
const bodyParser          = require('body-parser');
const CalendarService     = require('./CalendarService');

class ServerContainer {
  constructor() {
    this.app = express();
    this.CalendarService = new CalendarService();
    this.urls = [];
    this.length = 0;
    this.preparedScreenshots = 0;
  }

  feedData(length, urls, preparedScrenshots) {
   this.length = length;
   this.preparedScreenshots = preparedScrenshots;
   this.urls = urls;
  }

  async startExpress() {
    var lengthScrenshots = this.length;
    var urls = this.urls;
    var readyImageStock = this.preparedScreenshots;
    var date = this.CalendarService.getDate();
    return new Promise((resolve, reject) => {
      this.app.engine('ejs', require('express-ejs-extend'));
      var port = process.env.PORT || 8100;
      this.app.listen(port);
      this.app.use(express.static(__dirname + '\\..\\dist\\'));
      this.app.get('/', function (req, res) {
        res.render(__dirname + '\\..\\templates\\index.ejs', {
          'stock_screenshots': lengthScrenshots,
          'stock_urls': urls,
          'prepared_screenshoots': readyImageStock,
          'date': date
        });
      });
      resolve(true);
    });
  }
}

module.exports = ServerContainer;
