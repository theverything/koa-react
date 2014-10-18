var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
  context: __dirname + "/public/js",
  entry: "./main",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx-loader?harmony" }
    ]
  },
  plugins: [
    // new UglifyJsPlugin()
  ]
}
