// 1 what's the difference between function declaration and expression in terms of hoisting?

// declaration are hoisted
// abcd();
// function abcd() {
//   console.log("hello");
// }

// expression not hoisted gives an error

// abcd();
// let abcd = function () {
//   console.log("hello");
// };

// --------------------------------

// convert into arrow function
// function multiply(a, b) {
//   return a * b;
// }

// let multiply = (a, b) => {
//   return a * b;
// };
// let sum = multiply(1, 2);
// console.log(sum);

// ----------------------------------

// what does the '...' operator mean in parameters ?

// function abcd(a, b, c, ...val) {
//   console.log(a, b, c, val);
// }
// abcd(1, 2, 3, 4, 5, 6, 7);

// use rest parameter to accept any number of scores and return the total

// function getScore(...score) {
//   let total = 0;
//   score.forEach((val, idx) => {
//     total += val;
//   });
//   return total;
// }
// console.log(getScore(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// --------------------------------------------

// fix the function using early return

// function checkAge(age) {
//   if (age < 18) {
//     console.log("too young");
//   } else {
//     console.log("Allowed");
//   }
// }

// function checkAge(age) {
//   if (age < 18) return "Too young";
//   return "Allowed";
// }

// console.log(checkAge(17));

// -----------------------------------

// what does it mean when we say 'functions are first-class citizens'

// -----------------------------------

// can you assign a function to a variable and then call it ?

// let a = function () {
//   console.log("hello");
// };

// a();

// --------------------------------------------

// pass a function into another function and execute it inside

// function abcd(val) {
//   val(function (val3) {
//     val3(function () {
//       console.log("hlloo");
//     });
//   });
// }
// abcd(function (val2) {
//   val2(function (val4) {
//     val4();
//   });
// });
