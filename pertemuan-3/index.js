//JavaScript Variable & Operators
//1. JavaScript Variable

// let fullName = "John Doe" //camel case
// let full_name = "John Doe" //snake case
// let FullName = "John Doe" //Pascal case

// console.log(fullName)

//Tipe-tipe data
// const gender = "male" //String
// let age = 30 //Number Integer
// let weight = 90.6 //Number Float
// let isMarried = false //Boolean
// let grade = null //Null
// let address //undefined

// console.log(gender, age, weight, isMarried, grade, address)

//2. JavaScript Operator
//a. Arithmetic Operator (+, -, *, /, %, **)
// let bil1 = 20
// let bil2 = 5
// console.log(bil1 + bil2) //25
// console.log(bil1 - bil2) //15
// console.log(bil1 * bil2) //100
// console.log(bil1 / bil2) //4
// console.log(bil1 % bil2) //0
// console.log(bil1 ** bil2) //3200000

//Mini Exercise
//Buatlah program untuk menghitung luas lingkaran
//dimana r/jari-jari anda tentukan sendiri
//dan tampilkan hasilnya
// const PHI = 3.14
// let r = 5
// let luas = PHI * (r * r)
// console.log(luas)

//b. Assignment Operator (=, +=, -=, *=, /=)
// let bilangan = 5
// bilangan = bilangan + 10
// bilangan += 5
// console.log(bilangan)

//c. String Operator (+) Concatination
// let firstName = "John"
// let lastName = "Doe"
// let fullName = firstName + " " + lastName
// console.log(fullName)

//d. Relational Operator (==, ===, >, <, >=, <=, !=)
let bil1 = 10
let bil2 = 20
let bil3 = "10"

console.log(bil1 == bil3) //true
console.log(bil1 === bil3)//false
console.log(bil1 > bil2) //false
console.log(bil1 < bil2) //true

//e. Logical Operator (&&, ||, !)
console.log(true && true) //true
console.log(false && true) //false
console.log(true && false) //false
console.log(false && false) //false

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

console.log(!true) //false

//f. Ternary Operator (? :)
let age = 17
let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP"
console.log(isEligible)

//Mini Exercise
//Buatlah program yg menghitung BMI (Body Mass Index)
//Rumus BMI = berat (kg) / (tinggi (m) * tinggi (m))
//tampilkan hasilnya jika
//BMI > 25 -> "BMI anda adalah ___, kategori kelebihan berat badan"
//BMI < 25 -> "BMI anda adalah ___, kategori berat badan normal"
let berat = 78
let tinggi = 1.77
let bmi = berat / (tinggi * tinggi)
let hasil = bmi > 25 ? "BMI anda adalah " + bmi + ", kategori kelebihan berat badan" : "BMI anda adalah " + bmi + ", kategori berat badan normal"
console.log(hasil)

