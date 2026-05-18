// let marks = [10, 20, 30, 48, 55];

// let randomMarks = Math.floor(Math.random() * marks.length);

// console.log(marks[randomMarks]);

// -----------------------------

// let arr = [1, 2, 4, 55, 6];

// arr[3] = 5;

// console.log(arr);

//--------------push--------------

// let arr = [1, 2, 3, 4, 5];

// arr.push(99);

// console.log(arr);

//--------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// //remove the last value from the array
// arr.pop();
// console.log(arr);

//---------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// //remove the first value from the array
// arr.shift();
// console.log(arr);

//---------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// //add something at the start of an array
// arr.unshift(0);
// console.log(arr);

//----------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// // //remove a number from the middle
// arr.splice(2, 1);
// // // 2 - means kaha se value hatani h
// // // 1 - means kitni value hatani h
// console.log(arr);

//----------------------------------------

// let arr = [1, 2, 3, 4, 5];
// //it provide a new arr copy
// // now remove values form 0 index to 3 but main "arr" wont change
// let newarr = arr.slice(0, 3);
// console.log(newarr);

//-----------------------------------

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

//-----------------------------------
//sort means acesnding order or decending order
// let arr = [22, 13, 56, 42, 22, 5, 4, 3];
// // arr.sort(); // descending order
// arr.sort((a, b) => a - b); //ascending order
// console.log(arr);

//------------------------------

// let arr = [11, 62, 3, 4, 25];
// arr.forEach(function (val) {
//   val = val + 5;
//   console.log(val);
// });

//------------------------------

// use map when you want to create a new array on the basis of old array data
//map dekhte hi saath man mein ek blank array bana liya karo
// jab bhi appko aisa koi case dikh jaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega

// let arr = [11, 62, 3, 4, 25];

// let arr1 = arr.map((val) => {
//   //   return 12; // always use "return" not "console.log()"
//   return val > 10 ? val : "";
// });

// console.log(arr1);

//------------------------------

// filter - bring some member from old array and left some

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let arr1 = arr.filter((val) => {
//   //   return true;//val will go to new arr
//   // return false //val wont go to new arr

//   return val > 4 ? true : false;
// });

// console.log(arr1);

//------------------------------

// reduce - ek array se ek value bnana

// let arr = [1, 2, 3, 4, 5, 6];
// //previous value , current value ,current index
// let arr1 = arr.reduce((accumulator, val) => {
//   return accumulator + val;
// }, 0);
// /*
//  0 = 0 + 1;
//  1 = 1 + 2;
//  3 = 3 + 3;
//  6 = 6 + 4;
//  10 = 10 + 5;
//  15 = 15 + 6;
//  output:- 21
// */
// console.log(arr1);

//------------------------------

// find - return the 1 value which satisfic the condition

// let arr = [
//   { id: 1, key: 1 },
//   { id: 2, key: 2 },
//   { id: 3, key: 1 },
// ];
// let arr1 = arr.find((val) => {
//   return val.key === 1;
// });
// console.log(arr1);

//------------------------------------
// Some - 1 should pass the condition

// let arr = [10, 30, 32, 90];
// let any = arr.some(function (val) {
//   return val > 85;
// });

// console.log(any);

// -------------------------------------
// every - everyone must pass the condition

// let arr = [10, 30, 32, 90];
// let eve = arr.every(function (val) {
//   return val > 60;
// });
// console.log(eve);

//-------------------------------------------

// destruturing and spread operator

//you want 1 element out in variable

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, b] = arr;
// console.log(a, b);

//----no you dont want 3 but 4

// let arr = [1, 2, 3, 4, 5];

// let [a, b, , c] = arr;

// console.log(a, b, c);

//--------------------------------
//spread

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [...arr];
// console.log(arr2);

// -----------------------------------

//Create an array with 3 fruits and print the second fruit

// let fruit = ["banana", "apple", "mongoo"];
// console.log(fruit[2]);

// -----------------------------------

//add "mongoo at the end and "pineapple at the beginning
// of this arr

// let fruit = ["banana", "apple"];

// fruit.push("mongoo");
// fruit.unshift("pineapple");

// console.log(fruit);

// -----------------------------------

//replace "banana" with "kiwi" in the array above

// let fruits = ["apple", "banana"];
// fruits.pop();
// fruits.push("kiwi");
// console.log(fruits);

// -----------------------------------

//Insert "red" and "blue" at index 1 in this array

// let colors = ["green", "yellow"];
// colors.splice(0, 0, "red", "blue");
// console.log(colors);

//---------------------------------------

// extract only the middle 3 elements from this array

// let items = [1, 2, 3, 4, 5, 6, 7];
// let newitems = items.slice(2, 5);
// console.log(newitems);

//---------------------------------------

//sort this array alphabetically and then reverse it:

// let names = ["zara", "arjun", "mira", "bhavya"];

// let newnames = names.sort().reverse();

// console.log(newnames);

//---------------------------------------

// use .map() to square each number:

// let arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((val) => {
//   return val * val;
// });
// console.log(newArr);
//---------------------------------------

//use .filter() to keep numbers greater than 10:

// let arr = [12, 4, 1, 6, 7, 22, 35, 65, 35];
// let newArr = arr.filter((val) => {
//   return val > 10;
// });
// console.log(newArr);

//---------------------------------------

// use .reduce() to find the sum of this array

// let arr = [10, 20, 30];
// let newArr = arr.reduce((accumilator, val) => {
//   return accumilator + val;
// }, 0);

//---------------------------------------

// use .find() to get the first number less than 10

// let arr = [21, 12, 5, 6, 39];
// let newArr = arr.find(function (val) {
//   return val < 10;
// });
// console.log(newArr);

//---------------------------------------

// use .some() to check if any student has scored below 35://one value must be true

// let arr = [21, 34, 55, 65, 12, 45];
// let newArr = arr.some(function (val) {
//   return val < 35;
// });
// console.log(newArr);

//---------------------------------------

// use .every() to check if all numbers are even
// every value must be true
// let arr = [2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.every((val) => {
//   return val % 2 === 0;
// });
// console.log(newArr);

//---------------------------------------

//destructure this array to get firstname and lastname

// let fullName = ["Harsh", "Sharma"];
// let [firstName, LastName] = fullName;
// console.log(firstName, LastName);

//--------------------------------------

// merge two arrays using spread operator

// let a = [1, 2];
// let b = [3, 4];
// let c = [...a, ...b];
// console.log(c);

//------------------------------------------

//Add "india" to the start of this array using spread

// let countries = ["usa", "uk"];
// countries = ["india", ...countries];
// console.log(countries);

//----------------------------------------------

//clone this array properly (not by reference)
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2);
