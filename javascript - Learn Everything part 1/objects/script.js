// let obj = {
//   name: "harsh",
//   age: 26,
//   khaana: "daal chaawal",
// };

// console.log(obj.age); // correct
// console.log(obj["name"]);// correct

// --------------------------------------------

// let obj = {
//   name: "harsh",
//   age: 26,
//   khaana: "daal chaawal",
// };

// // let aa = "name";
// // console.log(aa); no this 'aa' wont convert into name:"harsh"

// //to convert it write like this

// let aa = "name";
// console.log(obj[aa]);

// --------------------------------------------

//nesting and deep access

// let user = {
//   name: "Harsh",
//   address: {
//     city: "bhopal",
//     pin: 462001,
//     location: {
//       lat: 23.2,
//       lng: 77.4,
//     },
//   },
// };

// console.log(user.address.location.lng);

// Object De-structing
// let { lat, lng } = user.address.location;
// let { city, pin } = user.address;
// console.log(lat, lng);
// console.log(city, pin);

//-------------------------------------------
//looping [for-in,objects.keys,object.entries]

//for-in
// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };
// for (let key in obj) {
//   //   console.log(key);
//   console.log(key, obj[key]);
// }

/////////////

//objects.keys

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };
// console.log(Object.keys(obj));

/////////////////

// object.entries

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };

// console.log(Object.entries(obj));

//------------------------------------

//Oject-assign , deep clone

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };
//data will go inside obj2 (spread operator)
// let obj2 = { ...obj };

// console.log(obj2);

//////////////////////////

//object.assign - use to copy object

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };

// let obj2 = Object.assign({}, obj);
// console.log(obj2);

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };

// let obj2 = Object.assign({ price: Infinity }, obj);

// console.log(obj2);

//deep cloning

// let user = {
//   name: "Harsh",
//   address: {
//     city: "bhopal",
//     pin: 462001,
//     location: {
//       lat: 23.2,
//       lng: 77.4,
//     },
//   },
// };

//convert object to string
// JSON.stringify(user);

//convert back to object
// JSON.parse(user);

// let obj2 = JSON.parse(JSON.stringify(user));

// --------------------------------------

// optional chaining and computed properties

// let obj = {
//   name: "Harsh",
//   addresses: {
//     city: "bhopal",
//     pin: 462001,
//     location: {
//       lat: 23.2,
//       lng: 77.4,
//     },
//   },
// };
// // if its there then return but dont give error
// console.log(obj?.address?.city);

//--------------------------------------

//computed properties

// let role = "admin";

// let obj = {
//   name: "Harsh",
//   addresses: {
//     city: "bhopal",
//     pin: 462001,
//     location: {
//       lat: 23.2,
//       lng: 77.4,
//     },
//   },
//   [role]: "harsh",
// };

// console.log(obj);

// Create an object for a student with name ,age, and  isEnrolled

// let student = {
//   name: "Harsh",
//   age: 26,
//   isEnrolled: true,
// };

// can an  object key be a number or boolean ? try this

// const obj = {
//   true: "yes",
//   42: "answer",
// };

// console.log(obj[42]);
// let { 42: value } = obj;
// console.log(value);

// Access the value of "first - name" from this object :
// const user = {
//   "first-name": "harsh",
// };

// console.log(user["first-name"]);

//Given a  dynamic key let key = "age", how will you access user[key]

// let key = "age";
// const user = {
//   key: "abcd",
//   age: 26,
// };
// === key -> age->26 ===
// console.log(user[key]);

//from the object below print the latitude

// const location = {
//   city: "bhopal",
//   cordinates: {
//     lat: 23.2,
//     lng: 77.4,
//   },
// };

// let { lat } = location.cordinates;
// console.log(lat);

// what will happen if coordinates is missing ? how can you prevent errors?

const location = {
  city: "bhopal",
  cordinates: {
    lat: 23.2,
    lng: 77.4,
  },
};

console.log(location?.cordinates?.Lat);
