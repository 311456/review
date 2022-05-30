function origin(a, b) {
  console.log(this.name);
  console.log([a, b]);
}
const obj = {
  name: "hhh"
}
// const resFn = origin.bind(obj, 1)
// resFn(4)
Function.prototype.bindFn = function () {
  // 1.获取原函数 --》origin
  const fn = this
  // 2.获取目标对象 --》obj
  const obj = arguments[0]
  // 3.获取原对象的参数 -->1
  const args = [].slice.call(arguments, 1)
  // 4.返回值是函数 -->resFn
  return function () {
    // 5.获取返回值函数的参数 -->4
    const returnArgs = [].slice.call(arguments)
    // 6.调用函数 --origin
    fn.apply(obj, args.concat(returnArgs))
  }
}

const resFn = origin.bindFn(obj, 1, 6)
resFn()