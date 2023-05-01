//  Viết một đoạn lệnh yêu cầu người dùng nhập độ dài đáy và chiều cao của hình tam giác và tính diện tích của tam giác ấy (diện tích = 0.5 x đáy x cao)
// let inputNumbers = [];
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//   console.log('Enter base, height: ');
//   readline.on('line', function(line) {
//     // Put the number in an array
//     inputNumbers.push(parseInt(line));
//    // Stop when the array is 5 numbers long
//    if (inputNumbers.length == 2) {
//   console.log(`The area of the triangle is ${0.5 * inputNumbers[0] * inputNumbers[1]}`);

//     readline.close();
//    }
// });
// console.log("Enter side a, b, c: ");
// readline.on("line", function (line) {
//   // Put the number in an array
//   inputNumbers.push(parseInt(line));
//   // Stop when the array is 5 numbers long
//   if (inputNumbers.length == 3) {
//     console.log(
//       `The perimeter of the triangle  ${
//         inputNumbers[0] + inputNumbers[1] + inputNumbers[2]
//       }`
//     );

//     readline.close();
//   }
// });

// console.log("Enter width, height: ");
// readline.on("line", function (line) {
//   // Put the number in an array
//   inputNumbers.push(parseInt(line));
//   // Stop when the array is 5 numbers long
//   if (inputNumbers.length == 2) {
//     console.log(
//       `S is  ${
//         inputNumbers[0] * inputNumbers[1]
//       }`
//     );
//     console.log(
//         `P is  ${ 
//           (inputNumbers[0] + inputNumbers[1]) * 2
//         }`
//       );
//     readline.close();
//   }
// });

// console.log("Enter R: ");
// readline.on("line", function (line) {
//     // Put the number in an array
//     inputNumbers.push(parseInt(line));
//     // Stop when the array is 5 numbers long
//     if (inputNumbers.length == 1) {
//       console.log(
//         `S is  ${
//           Math.PI * inputNumbers[0] ** 2 
//         }`
//       );
//       console.log(
//         `P is  ${
//          2 * Math.PI * inputNumbers[0]
//         }`
//       );
//       readline.close();
//     }
//   });

// Nếu độ dài tên bạn lớn hơn 7, hiển thị 'your name is long' nếu không, hiển thị 'your name is short'.
let name = " Phuoc Loi";
name.length > 7 ? console.log('your name is long') : console.log('your name is short');
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) 
: console.log(`Your lastName, ${lastName} is longer than your first name, ${firstName}`);

//Tạo 2 biến myAge và yourAge và gán giá trị vào 2 biến ấy. Hiển thị kết quả theo cấu trúc sau.
let myAge = 250;
let yourAge = 25;
myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) :  console.log(`You are ${yourAge - myAge} years older than me.`);
//Yêu cầu người dùng nhập năm sinh. Nếu người dùng lớn hơn hoặc bằng 18, cho phép người dùng lái xe. Nếu không hiển thị số năm người dùng cần phải chờ để đủ 18.
let birthYear = 2000;
let date = new Date();
date.getFullYear() - birthYear >= 18 ? console.log(`You are ${date.getFullYear() - birthYear}. You are old enough to drive`) :  console.log(`You are ${date.getFullYear() - birthYear}. You will be allowed to drive after 3 years.`);
// Viết đoạn lệnh yêu cầu người dùng nhập số năm. Tính số giây của số năm đã nhập.
let numberOfYears = 100;
console.log(new Date(2170,01, 01).getTime());

// Tạo các định dạng thời gian dễ đọc sử dụng đối tượng Date
console.log(`${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `);