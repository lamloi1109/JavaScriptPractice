// Biến là một phần cơ bản của lập trình. Chúng ta khai báo biến để chứa các loại dữ liệu khác nhau
// Để khai báo 1 biến chúng ta sử dụng các key word: let, const và var
// Biến có các scope:
// Global
// Local
// BIến có thể khai báo global scope hay local scope
// Nếu biến khai báo mà ko có sử dụng let, const hay var thì biến đó sẽ có global scope lv
name = 10;
console.log(name);
function abc() {
  console.log(name);
  name = 11;
  console.log(name);
}
abc();
avariable = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
bamboo = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(avariable, bamboo);
  if (true) {
    console.log(avariable, bamboo);
  }
}
console.log(avariable, bamboo); // accessible
// console.log(window.a);

// GLOBAL SCOPE
// Biến khai báo với scope global có thể truy cập ở bất kỳ nơi nào trong file
//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    // Block Scope
    // Lúc này a, b sẽ ưu tiên block scope hơn
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

// Function scope
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
    // c d chỉ thể được truy cập bên trong {} của if
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
  //   console.log(d);
}
var gravity = 1;

function letsLearnScope() {
  var gravity = 9;
  console.log(gravity);
}
letsLearnScope();
console.log(gravity);
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

if (1) {
  var varVariable = "123";
  let letVariable = "111";
}
console.log(varVariable, letVariable);
