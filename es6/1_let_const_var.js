// 函数提升高于变量提升，且不会被变量声明覆盖，但是会被变量赋值覆盖。
console.log(typeof a);

function a() { }
var a;
