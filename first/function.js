//block of code
//re-use

// named function 
// 1)defination
// function function-name(params1, params2, ...., paramsn) {
//     logic / code
// }
// // 2) calling
// function-name(arg1, arg2, ..., argn);

// function function_one() {
//     return "this is function_one";
// }


// function function_one(param1, param2, param3) {
//     console.log(param1, param2, param3);
// }
// function_one("one", "two", "three");



// function function_one(param1, param2, param3) {
//     console.log(param1, param2, param3);
// }
// // function_one(undefined, "Helllo");
// console.log(function_one(undefined, "Helllo"));



// function function_one() {
//     return function_two;
// }
// function function_two() {
//     return "this is function_two....";
// }

// undefined
// console.log(function_one())
// VM441:1 ƒ function_two() {
//         return "this is function_two....";
//     }
// undefined
// console.log(function_one()())
// VM459:1 this is function_two....

// console.log(function_one());
// console.log(function_one);

// function doSqare(n) {
//     return n * n;
// }
// console.log(doSqare(4))

// function doSqare(n) {
//     console.log(n);
//     var n = 10
//     return n * n;
// }
// console.log(doSqare())