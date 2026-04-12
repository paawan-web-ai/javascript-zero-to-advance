//agar code likh diya to wo turant chal jaata hai

// console.log("hey");

// function dance() {
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
// }
// dance();

// funcition declaration
// function abcd(){}

// function expression
// let fnc = function(){}

// arrow / fatarrow function
// let fnc = () => {
//   console.log("hello fnc");
// };
// fnc();

// parameters and arguments

// function abcd(v1) {
//   console.log(`${v1} naach raha hai`);
// }
// abcd("ghoda");
// abcd("hirad");
// abcd("cheel");
// abcd("lakadbaggha");

// function add(v1, v2)//parameters {
//   console.log(v1 + v2);
// }
//arguments
// add(2, 4);

// function add(v1, v2=0)//parameters {
//   console.log(v1 + v2);
// }
//arguments
// add(2);

//rest parameters

// function abcd(v1, v2, ...all) {
//   console.log(v1, v2, all);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// return - vapis vahi jaayo jaha se aaye the

// function abcd(v) {
//   return 12 + v;
// }
// let val = abcd(2);
// console.log(val);

// first class fncs => function ko values ki tarah treat kar sakte hai

// function abcd(val) {
//   val();
// }
// abcd(function () {
//   console.log("hello");
// });

// high order fncs - wo function hota hai jo ki return kare function ye fir accept kare ek function apne parameter mein

//upper funciton is higher order function

// function abcd(val) {}
// abcd(function () {});

//2

// abcd chala
// return hua ek function()
// ab abcd() ki jagaha function() aagya
// jise tumne fir se chala diya

// function abcd() {
//   return function () {
//     console.log("hello");
//   };
// }
// abcd()();

//pure vs impure functions
//aisa fnc jo ki baahar ki value ko na badle wo hai "pure fnc"

// let a = 12;
// function abcd() {
//   console.log(a);
// }

//aisa fnc jo baahar ki value ko badal de wo hai "impure fnc"

// function hui() {
//   a++;
// }

// closure and lexical scoping

//closure => ek fnc jo return kare ek aur function aur return hone wala function humesha use karega parent fnc ka koi variable

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }
// abcd()();

//lexical scoping

// function abcd() {
//   let a = 12; // we can access "a" anywhere inside abcd() but not outside of it.
//   function defg() {
//     let b = 13; // we can access "b" anywhere inside defg() but not outside of it.
//     function ghij() {
//       let c = 14; // we can access "c" anywhere inside ghij() but not outside of it.
//     }
//   }
// }

//IIFE (immediately invoked function expression)

// (function () {
//   console.log("hello");
// })();

//Hosting differences between Declaration and Expression

//hosting - you can use a function with before making it

//worked
// abcd();
// function abcd() {
//   console.log("heeheyehyeh");
// }

//wont work function express it cant hoist
abcd();
let abcd = function () {
  console.log("heehehy");
};
