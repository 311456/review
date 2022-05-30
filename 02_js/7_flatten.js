// 数组拍平
let arr = [1, 4, [4, 2, [8, 9, 5]]] // [1, 4, 4, 2, 8, 9, 5]

// ^ reduce
function flatten(arr) {
  return arr.reduce((prev, curr) => {
    // 如果当前的元素是数组，就进行迭代；如果不是，就concat拼接到前一个值中
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}

// ^ es6自带的flat函数
function flatten(arr) {
  // 输入遍历的深度
  return arr.flat(Infinity)
}

// ^ while循环+扩展运算符
function flatten(arr) {
  // Array.prototype.some()测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr))