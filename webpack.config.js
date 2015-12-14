module.exports = {
  context: __dirname,
  entry: "./index.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel-loader", query: { presets: ['es2015', 'react'] } },
      { test: /\.js$/, loader: "babel-loader", query: { presets: ['es2015', 'react'] } }
    ]
  }
};
