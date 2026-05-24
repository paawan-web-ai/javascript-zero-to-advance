/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because
1(2) + 2(2) +2(2) =9.
*/
//-----------------------------------------------------
//(1) let sum = [1, 2, 2];

// function squareSum() {
//   let add = 0;
//   sum.forEach((val) => {
//     add += val * val;
//   });
//   return add;
// }
// console.log(squareSum());

//-----------------------------------------------------
//(2)
// let sum = [1, 2, 2];
// function squareSum() {
//   return sum.reduce((acc, val) => {
//     return acc + val * val
//   }, 0);
// }

//////////////////////////////////////////////////////////////

/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: [-2.398]
Output: -2.398

Input: []
Output: 0
*/

//1

// function sumArr(num) {
//   return num.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
// }

// console.log(sumArr([1, 5.2, 4, 0, -1]));

//--------------------------------------------------------

//2

function sumArr(num) {
  let add = 0;
  num.forEach((element) => {
    //add = add + element
    return (add += element);
  });
  return add;
}
console.log(sumArr([1, 5.2, 4, 0, -1]));
