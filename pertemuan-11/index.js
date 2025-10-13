//Destructuring & Module
//1. Destructuring Array & Object

//Structuring Array/membuat array
// let numbers = [1, 2, 3, 4, 5];

//Destructuring Array
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1, num2, num3, num4, num5);

//Destructuring sebagaian item dlm array
//dilihat dari posisi index
// const [, num2, num3, ,] = numbers;
// console.log(num2, num3);

//Destructuring dengan rest parameter
// const [num1, ...rest] = numbers;
// console.log(num1, rest);

//Destructuring Object
// const student1 = {
//   fullName: "John",
//   age: 25,
//   status: "active",
// };

// const fullName = student1.fullName;
// const age = student1.age;
// const status = student1.status;

// const { fullName, age, status } = student1;
// console.log(fullName, age, status);

//Destructuring Sebagian item
// const { age } = student1;
// console.log(age);

//Destructuring object dengan rest
//Tipe data rest parameter pada object adalah bertipe object
// const { fullName, ...rest } = student1;
// console.log(fullName);
// console.log(rest);

//Mini Exercise
//Lihat exercise 4 modifikasi dibagian yang dapat dibuat
// distructuring array/object

// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// function yearUntilRetirement({ year, firstName }) {
//   var age = calculateAge(year);
//   var retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years");
//   } else {
//     console.log(firstName + " is already retired.");
//   }
// }

// yearUntilRetirement({ year: 1987, firstName: "John" });

// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function ({ radius, power }) {
//   return phi * Math.pow(radius, power);
// };

// radius = 21;
// var area21 = calculateArea({ radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({ radius: radius, power: 2 });

// console.log(
//   "area with 21 radius: " + area21 + ", and area with 7 radius: " + area7
// );

//2. Module
import { student as mahasiswa, angka } from "./data.js";
import ucapkanSalam from "./sayGreetings.js";

console.log(mahasiswa);
console.log(angka);

ucapkanSalam();
