class Bundler {
  constructor() {

  }

  async startWebpack() {
    return new Promise((resolve, reject) => {
      // webpack({
      //   entry: {
      //     app: 'C:\\Users\\pmaternicki\\Documents\\git\\MirAI\\src\\ApplicationServer\\client\\app.js'
      //   },

      //   output: {
      //     filename: '..\\src\ApplicationServer\\dist\\app.min.js',
      //     library: '[name]',
      //     libraryTarget: 'umd',
      //     umdNamedDefine: true
      //   },

      //   module: {
      //     rules: [
      //         {
      //           test: /\.js$/,
      //           exclude: /node-modules/,
      //           loader: 'babel-loader',
      //         },
      //         {
      //           test: /\.vue$/,
      //           loader: 'vue-loader'
      //         }
      //     ]
      //   },

      //   plugins: [
      //       new VueLoaderPlugin()
      //   ]
      // });
      resolve(true);
    })
  }
}

module.exports = Bundler;
