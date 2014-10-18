module.exports = {
  context: __dirname + "/public/js",
  entry: "./main",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  }
}
