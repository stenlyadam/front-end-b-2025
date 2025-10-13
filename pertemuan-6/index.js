//Array & Object in JS
//1. Array
//Cara mendeklarasikan array
//Cara 1. Array Literal
// let students = ["John", "Jack", "Jane", "Peter"];
// let john = ["John Doe", 30, true, [80, 90, 100]];
// //Cara 2. Kata kunci 'new'
// let employes = new Array("John", "Jack", "Jane", "Peter");

// //Menampilkan semua element array sekaligus
// console.log(students);
// //Menampilkan salah satu element berdasarkan index
// console.log(students[2]);
// john[2] = false;
// console.log(john);
// //Menampilkan elemen terakhir dalam array
// console.log(students.length);
// console.log(students[students.length - 1]);

// //Array Method
// let array = [1, 2, 3, "Hello", false, true];
// //1. toString() - merubah array menjadi string
// console.log(array.toString());
// //2. join()
// console.log(array.join("-"));
// console.log(array.join(" "));
// console.log(array.join("#"));
// //3. pop() - menghapus element terakhir
// array.pop();
// console.log(array);
// //4. push() - menambah element terakhir
// array.push("Selamat pagi");
// console.log(array);
// //5. shift() - menghapus element pertama
// array.shift();
// console.log(array);
// //6. unshift() - menambah element pertama
// array.unshift("Selamat Pagi");
// console.log(array);
// //7. splice() - tambah/hapus element ditengah
// array.splice(3, 0, 4);
// console.log(array);
// array.splice(4, 1, "Hello World");
// console.log(array);
// //8. slice() - ambil element array dan simpan ke array baru
// let numbers = array.slice(1, 4);
// console.log(numbers);
// //9. concat() - menggabungkan array
// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let num3 = [7, 8, 9];
// let combinedNumbers = num1.concat(num2, num3);
// console.log(combinedNumbers);

//2. Object
let john = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },
  sayHello: function () {
    console.log("Hello my name is " + this.fullName);
  },
};

//Menampilkan semua element dlm object
console.log(john);
//Cara akses element dalam object
//Cara 1. dot notation
console.log(john.fullName);
console.log(john.grade[1]);
console.log(john.address.city);
john.sayHello();

//Cara 2. bracket notation
console.log(john["fullName"]);
console.log(john["grade"][1]);
console.log(john["address"]["city"]);
john["sayHello"]();

john.age = 35;
john.job = "Programmer"; //menambah property baru
delete john.isActive; //menghapus property
console.log(john);
