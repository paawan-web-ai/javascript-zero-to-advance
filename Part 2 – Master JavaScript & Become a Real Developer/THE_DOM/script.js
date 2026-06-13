// let h1 = document.querySelector(".header");

// // console.log(h1.inner);

// // understand this

// console.dir(h1);

// h1.innerText = " hello ram kaise ho";

// let header = document.querySelector(".header");

// header.addEventListener("dblclick", () => {
//   header.style.color = "red";
// });

//remove event listner
// let header = document.querySelector(".header");

// let sum = 0;
// function dblclick() {
//   if (sum === 0) {
//     header.style.color = "red";
//     sum++;
//   } else {
//     header.style.color = "black";
//     sum--;
//   }
// }

// header.addEventListener("dblclick", dblclick);
// header.removeEventListener("dblclick", dblclick);

// input

// let input = document.querySelector("input");

// input.addEventListener("input", () => {
//   console.log(input.value);
// });

// back space

let input = document.querySelector("input");

input.addEventListener("input", (dets) => {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});
