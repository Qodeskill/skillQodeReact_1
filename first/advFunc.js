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

function curry(arg1) {
    console.log("arg1 : ", arg1);
    // console.log("arg2 : ", arg2);
    console.log("arg3 : ", arg3);
    return (arg2) => {
        console.log("arg2 : ", arg2);
        return (arg3) => {
            console.log("arg3 : ", arg3);
            return arg1 + arg2 + arg3;
        }
    }
}
console.log(curry(10)(20)(30));
