//! 基本数组去重

// 错误处理函数 
function handleError(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("arr is not a Array")
  }
}
// let arr = [2, 4, 5, 6, 7, 4, 3, 3, 2] // [ 2, 4, 5, 6, 7, 3 ]

//^ filter + indexOf
// function unique(arr) {
//   handleError(arr)
//   return arr.filter((item, index) => {
//     if (arr.indexOf(item) === index) {
//       return item
//     }
//   })
// }

// ^ 相邻元素排序
// function unique(arr) {
//   handleError(arr)
//   arr.sort()
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       res.push(arr[i])
//     }
//   }
//   return res+
// }

// ^ Set 对象解构赋值
// function unique(arr) {
//   handleError(arr)
//   return [...(new Set(arr))]
// }

// ^ Set 和Array.form()
// function unique(arr) {
//   handleError(arr)
//   return Array.from(new Set(arr))
// }

// console.log(unique(arr))


//! 对象数组去重
let arr = [{ name: "hhh", age: 18 }, { name: "aaa", age: 18 }, { name: "hhh", age: 20 }]
/**
 * 
 * @param {Array} arr 
 * @param {string} key 重复元素
 */
//^ 临时对象缓存数组项 key 值
// function unique(arr, key) {
//   handleError(arr)
//   let res = []
//   // 临时对象
//   let temp = {}
//   for (let i = 0; i < arr.length; i++) {
//     var keyName = arr[i][key]
//     if (temp[keyName]) {
//       // 如果当前的key已经有了，就跳过，没有就将该key存起来，用key为true标识。
//       continue
//     }
//     temp[keyName] = true
//     res.push(arr[i])
//   }
//   return res
// }

// ^ reduce 
function unique(arr, key) {
  handleError(arr)
  // 临时对象
  var cacheObject = {}
  return arr.reduce((prev, curr) => {
    cacheObject[curr[key]] ? '' : cacheObject[curr[key]] = true && prev.push(curr)
    return prev
  }, [])
}

console.log(unique(arr, "name"))
console.log(unique(arr, "age"))