//Asynchronous JavaScript

//Synchronous -> single thread -> blocking

// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchrouns -> multi thread ->non blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 1000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 4000);
//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//           }, 1000);
//         }, 1000);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

const newPromise2 = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//Pakai/Consume Promise
//1. then - catch
newPromise
  .then((result) => `${result} !!!`) //Proses 1
  .then((result2) => console.log(result2)) //Proses 2
  .catch((error) => console.log(error));

//2. async - await
//Buat dalam function
// (async () => {
//   let result = await newPromise;
//   console.log(result);
// })();

//Test get data API from JSONPlaceholder
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => console.log(users));

//Mini Exercise
//Ubah fetch menggunakan async-await tampilkan field name saja
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   users.forEach((item) => console.log(item.name));
// };

// getData();

(async () => {
  const result = await fetch("https://reqres.in/api/users");
  const json = await result.json();

  console.log(json);
})();

console.log("Test conflict beda file"
