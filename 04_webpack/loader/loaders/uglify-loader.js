// loader本质是一个函数。
const UglifyJs = require('uglify-js')
/**
 * 丑化代码
 * @param {*} source 要丑化的js文件代码
 * @returns 丑化后的代码
 */
module.exports = (source) => {
  let res = UglifyJs.minify(source)
  return res.code
}