// repeat karne ko loop kahete hai
// for while do-while forin forof foreach

// for (let i = 1; i < 30; i++) {
//   console.log(i);
//   if (i === 12) break;
// }

// ------------------------------

// for (let i = 1; i < 30; i++) {
//   if (i === 28) continue;
//   console.log(i);
// }

// practice

// print numbers from 1 to 10 using a for loop

// for(let i = 1 ; i<=10; i++){
//     console.log(i)
// }

//print numbers from 10 to 1 using a while loop.

// let i = 10;
// while(i>=1){
//     console.log(i)
//     i--
// }

// print even numbers from 1 to 20 using a for loop

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// print even numbers from 1 to 15 using a while loop

// let i = 1;
// while (i <= 15) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// print the multiplication table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${i * 5}`);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(`5 * ${i} = ${i * 5}`);
//   i++;
// }

// Find the sum of number from 1 to 100 using a loop
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// print all numbers between 1 to 50 that are divisible by 3

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// Ask the user for a number and print whether each number from 1 to 100
//(e.g - 1 is odd , 2 is even)

// let num = prompt("enter a number");
// num = Number(num);

// for (let i = 1; i <= num; i++) {
//   if (i % 2 !== 0) {
//     console.log(`${i} odd`);
//   } else {
//     console.log(`${i} even`);
//   }
// }

//count how many numbers between 1 to 100 are divisible by both 3 and 5

// let counter = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     counter++;
//     console.log(i);
//   }
// }
// console.log(counter);

// stop at first multiple of 7
// write a loop from 1 to 100 that:
// .prints each number
// .stops completely when it finds the first number divisible by 7

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 7 === 0) break;
// }

//write a loop from 1 to 20 that,
// skips numbers divisible by 3
// print all others
// use continue

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

// print first 5 odd numbers only
// write a loop from 1 to 100 that
// prints only 5 odd numbers
// then stops the loop
// use both if , continue , and a counter + break
// expected output - 1 3 5 7 9

// let counter = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     counter++;
//   }
//   if (counter === 5) break;
// }

