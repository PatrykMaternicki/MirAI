const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
console.log(path.resolve(__dirname, '../client/app.js'));
var baseConfig = {
  mode: 'development',
  watch: true,

  entry: {
    app: path.resolve(__dirname + '../client/app.js')
  },

  output: {
    filename: '..\\src\ApplicationServer\\dist\\app.min.js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node-modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
    ]
  },

  plugins: [
      new VueLoaderPlugin()
  ]
}

module.exports = baseConfig;
