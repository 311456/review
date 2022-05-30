const path = require('path')
const LogPlugin = require("./plugins/LogPlugin")
module.exports = {
  entry: "./index.js",
  mode: "development",
  plugins: [
    new LogPlugin({
      output: path.resolve(__dirname, 'webpack.log.json')
    })
  ]
}