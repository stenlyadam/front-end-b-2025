//Rest Parameter & Spread Operator
//1. Rest Parameter

//function tanpa rest parameter
// const funct1 = (
//   param1,
//   param2,
//   param3,
//   param4,
//   param5,
//   param6,
//   param7,
//   param8
// ) => {
//   const arr = [param1, param2, param3, param4, param5, param6, param7, param8];
//   let hasil = 0;
//   arr.forEach((item) => (hasil += item));
//   console.log(hasil);
// };

// funct1(1, 2, 3, 4, 5, 6, 7, 8);

//dengan rest parameter
//a. rest parameter bertipe array
//b. rest parameter harus ada di terakhir dari parameter list
// const funct1 = (param1, param2, ...rest) => {
//   let hasil = 0;
//   rest.forEach((item) => (hasil += item));
//   console.log(hasil);
// };

// funct1(1, 2, 3, 4, 5);

//2. Spread Operator
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Kegunaan Spread Operator pada Array
//1. Duplikasi array
const numbers2 = [...numbers];
console.log(numbers2);
//2. Menggabungkan array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combineArr1 = arr1.concat(arr2, arr3);
console.log(combineArr1);
let combineArr2 = [...arr1, ...arr2, ...arr3];
console.log(combineArr2);

//Kegunaan Spread Operator pada Object
//1. Duplikasi Object
const student1 = {
  firstName: "John",
  status: "active",
};
console.log(student1);
const student2 = { ...student1, address: "Manado" };
console.log(student2);

//2. Menggabungkan Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);
