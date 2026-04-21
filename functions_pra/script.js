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

//what is a higher-order function?

//A function which returns another function / accepts a funcition inside its parameter

// function abcd() {
//   return function () {
//     console.log("hello");
//   };
// }

// abcd()();

// function abcd(fn1) {
//   fn1();
// }
// abcd(function () {
//   console.log("hello");
// });

// convert the above function into a pure function

// let total = 0;
// function addToTotal(num) {
//   total += num;
// }

// let total = 0;

// function addToTotal(num) {
//   let newTotal = total;
//   newTotal += num;
//   console.log(`New Total: ${newTotal}`);
// }
// console.log(`Total: ${total}`);
// addToTotal(5);

//what is a closure? when is it created?
// A function which returns another function is called closures and inside function is the value of outer function

// function abcd() {
//   let val = 0;
//   return function () {
//     console.log(val);
//   };
// }
// abcd()();

// ------------------------------------

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let counter = outer();
// counter();
// counter();

//-------------------

//convert this normal function into an IIFE

// function init() {
//   console.log("initialized");
// }

// (() => {
//   console.log("hello");
// })();

// (function () {
//   console.log("initialized");
// })();

//use case of IIFE = when you want to create private variables

// let shery = (function () {
//   let score = 0;
//   return {
//     getScore: function () {
//       console.log(score);
//     },
//     setScore: function (val) {
//       score = val;
//     },
//   };
// })();

//BMI

// function bmi(weight, height) {
//   return weight / (height * height);
// }

// console.log(bmi(90, 1.7).toFixed(2));

// ---------------------
// discountcalculator

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let tenPercentOff = discountCalculator(10);
let twentyPercentOff = discountCalculator(20);

console.log(tenPercentOff(100));

// 👉 What happens to discount FIRST?
// Function is called:
// discountCalculator(10)
// Parameter receives value:
// discount = 10

// ✔️ So at this moment:

// A variable discount is created
// Its value = 10

// 🔹 Next step inside function:
// return function (price) {
//   return price - price * (discount / 100);
// };

// 👉 This inner function is created while discount = 10 exists

// This line:
// let tenPercentOff = discountCalculator(10);

// 👉 Means:

// discountCalculator(10) runs
// It returns a function
// That returned function is stored in tenPercentOff
