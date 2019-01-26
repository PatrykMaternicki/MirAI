// server.js
const express             = require('express');
const bodyParser          = require('body-parser');

class ServerContainer {
  constructor() {
    this.app = express();
  }

  async startExpress() {
    return new Promise((resolve, reject) => {
      this.app.engine('ejs', require('express-ejs-extend'));
      var port = process.env.PORT || 8100;
      this.app.listen(port);
      console.log(__dirname + '\\..\\dist');
      this.app.use(express.static(__dirname + '/dist'));
      this.app.get('/', function (req, res) {
        res.render(__dirname + '\\..\\templates\\index.ejs');
      });
      resolve(true);
    });
  }
}

module.exports = ServerContainer;
