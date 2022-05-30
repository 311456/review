const obj = {
  name: "aaa"
}
function test(a, b) {
  console.log(this.name);
  console.log(a, "---", b);
}
// test.call(obj, 4, 5)
// test.apply(obj, [5, 6])

//! 核心代码
const core = function (context, args, _this) {
  args = args || []
  const key = Symbol()
  // 将调用的函数绑定在对象上，使用Symbol生成的唯一key值进行标识
  context[key] = _this
  const res = context[key](...args)
  // 调用完成后删除绑定的函数
  delete context[key]
  return res
}

//^ call 
Function.prototype.callFn = function (context, ...args) {
  return core(context, args, this)
}
//^ apply
Function.prototype.applyFn = function (context, args) {
  return core(context, args, this)
}
test.callFn(obj, 7, 9)
test.applyFn(obj, [9, 77])