var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname + "/src",
  entry: "./index.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader" }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html",
    inject: "body"
  })]
};
