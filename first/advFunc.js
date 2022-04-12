// IIFE
//     ****
//     Immidiate Invokable Functional Expression
// ES9
// when ever we create the functions, automatically it will be invoked
// Syntax
//     ******
//     ((arg1, arg2, arg3, ....argn) => {
//         business logic
//     })(param1, param3, param3, ....paramn);
// (() => {
//     console.log("IIFE");
// })()

// (() => {
//     console.log("Skill");
// })()


// //IIFE
// ((arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3);
// })("Hello_1", "Hello_2", "Hello_3")
// //Hello_1 Hello_2 Hello_3ṇ

// let x = (() => {
//     return "hello";
// })()
// console.log(x);                 //hello


// ((arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3);
// })(
//     (() => {
//         return "hello_1";
//     })(),
//     (() => {
//         return "hello_2";
//     })(),
//     (() => {
//         return "hello_3";
//     })()
// );
//hello_1 hello_2 hello_3

// setTimeout(() => {
//     console.log("Hello");
// }, 5000);

// for (var i = 0; i < 5; i++) {
//     ((i) => {
//         setTimeout(() => {
//             console.log(i);
//         }, 5000)
//     })(i);
// }


/// currying

// function curry(arg1) {
//     console.log("arg1 : ", arg1);
//     // console.log("arg2 : ", arg2);
//     console.log("arg3 : ", arg3);
//     return (arg2) => {
//         console.log("arg2 : ", arg2);
//         return (arg3) => {
//             console.log("arg3 : ", arg3);
//             return arg1 + arg2 + arg3;
//         }
//     }
// }
// console.log(curry(10)(20)(30));



// constructor functions
// *********************
//     collection of variables and functions called as class
//         in javascript we will create classes by using constructor functions
//             in constructor functions all the members should start with "this" keyword
// we can create object by using new keyword


function class_one() {
    this.var_one = "Hello_1";
    this.var_two = "Hello_2";
    this.var_three = "Hello_3";
}
let obj = new class_one();

console.log(obj.var_one, obj.var_two, obj.var_three);
//Hello_1 Hello_2 Hello_3


// function class_one(arg1, arg2, arg3) {
//     this.var_one = arg1;
//     this.var_two = arg2;
//     this.var_three = arg3;
// }
// let obj1 = new class_one("Angular", "NodeJS", "MongoDB");
// console.log(obj1.var_one, obj1.var_two, obj1.var_three);
// let obj2 = new class_one("ReactJS", "NodeJS", "MongoDB");
// console.log(obj2.var_one, obj2.var_two, obj2.var_three);



// function class_one() {
//     this.fun_one = function () {
//         return "hello_1";
//     }
//     this.fun_two = function () {
//         return "hello_2";
//     }
//     this.fun_three = function () {
//         return "hello_3";
//     }
// }
// let obj = new class_one();
// console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
// //hello_1 hello_2 hello_3



// function class_one() {
//     this.var_one = "hello_1";
//     this.fun_one = function () {
//         return this.var_one;
//     }
// }
// let obj = new class_one();
// console.log(obj.fun_one());               //hello_1

// function class_one() {
// };
// class_one.prototype.var_one = "Hello_1";
// class_one.prototype.var_two = "Hello_2";
// class_one.prototype.var_three = "Hello_3";
// let obj = new class_one();
// console.log(obj.var_one, obj.var_two, obj.var_three);    //Hello_1 Hello_2 Hello_3


// function class_one() {
// };
// class_one.prototype.var_one = "Hello_1";
// class_one.prototype.fun_one = function () {
//     return "Hello_2";
// }
// let obj = new class_one();
// console.log(obj.var_one, obj.fun_one());              //Hello_1 Hello_2
// function class_one() {
// };
// class_one.prototype.var_one = "Hello_1";
// function class_two() {
// }
// class_two.prototype = Object.create(class_one.prototype);
// class_two.prototype.var_two = "Hello_2";
// let obj = new class_two();
// console.log(obj.var_one, obj.var_two);
// //Hello_1 Hello_2
// function Parent() {
// };
// Parent.prototype.fun_one = function () {
//     return "Parent";
// }
// function Child() {
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.fun_two = function () {
//     return "Child";
// }
// function Subchild() {
// }
// Subchild.prototype = Object.create(Child.prototype);
// Subchild.prototype.fun_three = function () {
//     return "Subchild";
// }
// let obj = new Subchild();
// console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
//     //Parent Child Subchild


