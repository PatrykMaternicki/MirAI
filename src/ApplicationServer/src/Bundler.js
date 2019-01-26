const webpack = require('webpack');
const config = require('../config/webpack.config.prod.js');
const path = require('path');

class Bundler {
  constructor() {

  }

  async startWebpack() {
    console.log(path.resolve(__dirname, '../client/app.js'));
    return new Promise((resolve, reject) => {
      webpack(config);
      resolve(true);
    })
  }
}

module.exports = Bundler;
