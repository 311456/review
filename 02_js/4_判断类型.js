// typeof
console.log(typeof 1); //number
console.log(typeof NaN); //! number
console.log(typeof null); //! object
console.log(typeof []); //! object
console.log(typeof {}); //object

// Object.prototype.toString.call()
console.log(Object.prototype.toString.call(1)); // [object Number]
console.log(Object.prototype.toString.call(NaN)); //! [object Number]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null)); // [object Null]


