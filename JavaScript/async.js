// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 1900)

// setTimeout(() => {
//     console.log("3");
// }, 2000);

// console.log("4");
// console.log("5");

function order(prod) {
    prod()
}
function production() {
    console.log("i got order, Please start production....");
}
order(production)
// order(() => {
//     console.log("i got order, Please start production....");
// })