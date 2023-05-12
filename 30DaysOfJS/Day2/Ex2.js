// Sử dụng console.log() in ra câu lệnh sau:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
// Sử dụng console.log() in ra câu trích dẫn sau đây của Mẹ Teresa:
//  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"`);
console.log(typeof '10' == typeof 10);
console.log(typeof '10' == typeof typeof 10);
// Kiểm tra xem parseFloat('9, 8') có bằng 10 hay không nếu không hãy làm cho nó bằng 10.
console.log(Math.ceil(parseFloat('9.8')));
// Kiểm tra xem có tìm thấy 'on' trong python và jargon không.
let str1 = 'python';
let str2 = 'jargon';
console.log( str1.includes('on') );
console.log( str2.includes('on') );
// Tạo một số ngẫu nhiên từ 0 đến 100.
console.log(Math.floor((Math.random()*11)));
// Tạo một số ngẫu nhiên từ 50 đến 100.
console.log(Math.floor(((Math.random()*(101 - 50)) + 50)));

// Tạo một số ngẫu nhiên từ 0 đến 255.
console.log(Math.floor(((Math.random()*(256)))));
// Truy cập các ký tự chuỗi 'JavaScript' bằng cách sử dụng số ngẫu nhiên.
let str = 'JavaScript';
console.log(str[Math.floor((Math.random()*str.length))]);
/*
Sử dụng console.log() và các ký tự thoát để in mẫu sau.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

*/
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");
// Sử dụng substr để cắt ra cụm từ bởi vì bởi vì từ câu sau:'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'

str = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ';

console.log(str.slice(str.indexOf('bởi'), str.lastIndexOf('bởi')));
