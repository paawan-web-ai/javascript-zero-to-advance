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
// //remove a number from the middle
// arr.splice(2, 1);
// // 2 - means kaha se value hatani h
// // 1 - means kitni value hatani h
// console.log(arr);

//----------------------------------------

let arr = [1, 2, 3, 4, 5];
//it provide a new arr copy
// now remove values form 0 index to 3 but main "arr" wont change
let newarr = arr.slice(0, 3);
console.log(newarr);
