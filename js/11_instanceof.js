function Person() { }
const obj = new Person()
// console.log(obj instanceof Person); // true

function _instanceof(obj, constructor) {
  let _proto = obj.__proto__
  let _prototype = constructor.prototype
  while (true) {
    // 已经找到最顶层了
    if (_proto === null) {
      return false
    }
    if (_proto === _prototype) {
      // 对象的隐式原型等于构造函数的显示原型，即找到了
      return true
    }
    // 依次向上查找
    _proto = _proto.__proto__
  }
}

const res = _instanceof(obj, Person)
console.log(res);