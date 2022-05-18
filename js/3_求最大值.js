let arr = [3, 67, 7, 4, 3, 1, 5, 3, 6, 7, 9, 88] // 88

// ^ Math.max
console.log(Math.max(...arr));
console.log(Math.max.apply(null, arr))

// ^ reduce
console.log(arr.reduce((prev, curr) => {
  return curr > prev ? curr : prev
}));

// ^ sort
arr.sort((a, b) => a - b)
console.log(arr[arr.length - 1]);