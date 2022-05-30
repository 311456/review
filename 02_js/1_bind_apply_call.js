// apply
const arr1 = [1, 3, 77, 4, 5, 6, 7]
let test1 = Math.max(...arr1)
let max = Math.max.apply(null, arr1)
let min = Math.min.apply(null, arr1)
// console.log("test1", test1);
// console.log("max", max);
// console.log("min", min);

// call
const arr2 = [1, 3, 4, 5]
let test2 = Object.prototype.toString.call(arr2)
// console.log(test2); //[object Array]

let arr3 = {
  0: "name",
  1: "hell",
  2: "ghjh",
  length: 3
}
let test3 = Array.prototype.slice.call(arr3)
console.log(test3); // [ 'name', 'hell', 'ghjh' ]

// bind
{/* <button onClick={this.btnClick.bind(this)}>按钮1</button> */ }