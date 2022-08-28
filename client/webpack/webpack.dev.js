const path = require('path');

module.exports = {
    mode: "development",
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    historyApiFallback: true,
    allowedHosts: "all",
    port: 3000,
  },
};