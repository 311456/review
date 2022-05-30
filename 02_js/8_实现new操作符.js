// 例子
function HMap(options) {
  this.name = options.name
  this.address = options.address
  // 有返回值的话，使用该构造函数获取的值的就是返回的对象
  // return {
  //   name: "yyy",
  //   address: "yyy"
  // }
}
// ^ new效果
// const map = new HMap({
//   name: "MMap",
//   address: "sichuan"
// })

// ^ 实现new操作符
function HNew(...args) {
  // 1.创建空对象
  let obj = {}
  // 2.获取构造函数
  let constructor = [].shift.call(args)
  // 3.将对象的隐式原型指向构造函数的显示原型
  obj.__proto__ = constructor.prototype
  // 4.用apply将构造函数的this指向obj，执行构造函数
  let ret = constructor.apply(obj, args)
  // 5.根据执行结果，决定返回值是什么。构造函数的执行结果或者空对象
  return typeof ret === 'object' ? ret : obj
}
const map = HNew(HMap, {
  name: "xxx",
  address: "xxx"
})
console.log(map); // HMap { name: 'MMap', address: 'sichuan' }
