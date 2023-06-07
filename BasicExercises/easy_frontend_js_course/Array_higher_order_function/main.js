let arr = [1, 2, 3];
// Clone Array in js
let arr2 = [...arr];
console.log(arr2, arr);
arr2.push(4);
console.log(arr2, arr);
// Các cách duyệt qua Array
// Trước ES5
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// ES5 forEach
let numberList = [1, 2, 3];
numberList.forEach((num) => console.log(num));
// ES6 for ... of
for (number of numberList) {
  console.log(number);
}
