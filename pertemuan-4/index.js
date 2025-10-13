//JavaScript Function

//Cara 1. Function Declaration
function greetings() {
  console.log("Hello World");
}
greetings(); //Call/invoke Function

//Cara 2. Function Expression
// const greetings2 = function (){
//     console.log("Hello World 2")
// }
// greetings2()

//Function with input (parameter & argument)
// and output (return value)
//Cara 1
//                 parameter
// function greetings(fullName){
//     return "Hello " + fullName
// }
// //                      argument
// let output = greetings("John Doe")
// console.log(output)
// //Cara 2
// const greetings2 = function(fullName){
//     return "Hello " + fullName
// }

// let output2 = greetings2("Jane Doe")
// console.log(output2)

// //Global, Local, Block Scope dari Variable
// let x = 10 //Global variable
// console.log(x) //10
// function func1(){
//     let y = 20 //Local Function Varible
//     console.log(x) //10
//     console.log(y) //20
//     if(true){
//         let z = 30 //Local Block Variable
//         console.log(x) //10
//         console.log(y) //20
//         console.log(z) //30
//     }
//     // console.log(z) //ERROR
// }
// // console.log(y) //ERROR
// func1()

//Mini Exercise
//Modifikasi mini exercise sebelumnya ttg menghitung BMI
//dengan menggunakan function dimana function tsb memiliki
// input dan output. Berat & tinggi sebagai input dan BMI sebagai output

function calculateBMI(berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  return bmi > 25
    ? "BMI anda adalah " + bmi + ", kategori kelebihan berat badan"
    : "BMI anda adalah " + bmi + ", kategori berat badan normal";
}

let output = calculateBMI(80, 1.7);
console.log(output);

//Pelajari dirumah tentang IIFE & callback function
