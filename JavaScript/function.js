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

// ---------------------------------------------------------------------------
//11/03/22
// ---------------------------------------------------------------------------

// function function_one(param1, param2, param3) {
//     console.log(param1, param2, param3);
// }
// function_one("one", "two", "three");

// //... spread operator
// function function_one(...param1) {
//     console.log(param1);
// }
// function_one("one", "two", "three", "four", "five", "six");
// function_one(undefined, "one", "two", "three", "four", "five", "six");

// function function_one(...param1) {
//     console.log(param1);
// }
// function_one(undefined, undefined, undefined)
// function_one(null, null, null)
// function_one(null, "hello2", null)
// function_one(); //[] empty array

// -----------

// function function_one(param1, ...param3) {
//     console.log(param1, param3);
// }

// function_one("hello1", "hello2", "hello3", "hello4")//SyntaxError: Rest parameter must be last formal parameter

// ----- default parameter
// function function_one(param1 = "Hello-1", param2 = "Hello-2", param3 = "Hello-3") {
//     console.log(param1, param2, param3);
// }

// function_one();
// function_one("one");
// function_one(undefined, undefined, undefined);
// function_one(undefined, "hello");
// function_one(null, null, null);
// function_one(null, "hello-A", undefined);

// function function_one(param1 = "Hello-1", ...param2) {
//     console.log(param1, param2);
// }
// function_one()
// function_one("one", "two")
// function_one(null, "two", "three", "four", "five")
// function_one(undefined, undefined, undefined)
// function_one(null, null, null)
// function_one(null)
// function_one(undefined, undefined, null)
// function_one(null, undefined, null)


// function function_one(param1, param2 = "Hello-1", ...param3) {
//     console.log(param1, param2, param3);
// }
// function_one()

// function_one("one", "two", "three", "four", "five")
// function_one(undefined, undefined, undefined)
// function_one(null, null, null)
// function_one(null)
// function_one(undefined, undefined, null)

// ---------------------------------------------------------------------------
//12/03/22
// ---------------------------------------------------------------------------

// function
// 1) defination
// function function-name(params1, params2, ...., paramsn) {
//     logic / code
// }
// 2) calling
// function-name(arg1, arg2, ..., argn);

// function function_one() {
//     return "this is function_one";
// }

// anonymous function -- > arrow function
// --> function without name

// keyword variable = (param1, param2, param3, ..., paramn) => {
//     logic / code
// }

// let function_one = function () { } //anonynous function
// let function_two = () => { }        //arrow function

// function_one();
// ------------------------
// let function_one = function () { return " function_one called... " }
// let function_two = () => " function_two called... "

// console.log(function_one());
// console.log(function_two())

// ------------------------

// let function_one = (param1) => " function_two called... " + param1
// console.log(function_one("Hello"));

// let function_one = param1 => " function_two called... " + param1
// console.log(function_one("Hello"));

// ------------------------

// let function_one = (param1, param2, param3) => param1 + " " + param2 + " " + param3
// console.log(function_one("Hello 1", "Hello 2", "Hello 3"));

// ------------------------

// let function_one = (param1, param2, param3) => console.log(param1 + " " + param2 + " " + param3)
// function_one("Hello 1", "Hello 2", "Hello 3");                  //call_1
// console.log(function_one("Hello 1", "Hello 2", "Hello 3"));     //call_2
// let return_one = function_one("Hello 1", "Hello 2", "Hello 3");     //call_2
// console.log(return_one);

// ------------------------

// let function_one = (param1, param2, param3) => {
//     console.log(param1 + " " + param2 + " " + param3);
//     return "function_one";
// }

// console.log(function_one("Hello 1", "Hello 2", "Hello 3"));     //call_2
// let return_one = function_one("Hello 1", "Hello 2", "Hello 3");     //call_2
// console.log(return_one);

