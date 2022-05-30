const fs = require('fs') // 内置模块
const json = require('format-json') // 需要自己安装
class LogPlugin {
  constructor(options) {
    this.options = options
    console.log(options);
  }
  apply(compiler) {
    compiler.hooks.done.tapAsync('getStates', (states) => {
      const log = json.plain(states.toJson())
      // 同步写入文件
      fs.writeFileSync(this.options.output, log)
    })
  }
}

module.exports = LogPlugin