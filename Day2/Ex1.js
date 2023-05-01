// Khai báo một biến có tên là challenge và gán giá trị là 'Học JavaScript trong 30 ngày'.
let challenge = 'Học JavaScript trong 30 ngày';
// In chuỗi trên console của trình duyệt bằng console.log().
console.log(challenge);
// In độ dài của chuỗi trên console của trình duyệt bằng cách sử dụng console.log().
console.log(challenge.length);
// Đổi thành chữ in hoa tất cả ký tự trong chuỗi bằng phương thức toUpperCase().
challenge = challenge.toLocaleUpperCase();
console.log(challenge);
// Đổi thành chữ thường tất cả ký tự trong chuỗi bằng phương thức toLowerCase().
challenge = challenge.toLowerCase();
console.log(challenge);
// Cắt (slice) từ đầu tiên của chuỗi bằng cách sử dụng phương thức substr() hoặc substring().
console.log(challenge.slice(0, challenge.indexOf(" ")));
console.log(challenge.substring(0, challenge.indexOf(" ")));
// Cắt bỏ cụm từ Học JavaScript from Học JavaScript trong 30 ngày.
challenge = challenge.slice(challenge.indexOf(' ') + 1 ,);
challenge = challenge.slice(challenge.indexOf(' ') + 1 ,);
console.log(challenge);
challenge = 'Học JavaScript trong 30 ngày';
// Sử dụng phương thức includes() để kiểm tra xem Script có trong chuỗi hay không.
console.log(challenge.includes('Script'));
// Tách string thành array sử dụng phương thức split()
let arr = challenge.split('');
console.log(arr);
// Tách chuỗi Học JavaScript trong 30 ngày tại khoảng trắng bằng phương thức split()
arr = challenge.split(' ');
console.log(arr);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' tách chuỗi tại dấu phẩy và đổi thành một mảng.
let socials = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(socials.split(','));
// Sử dụng replace() để đổi Học JavaScript trong 30 ngày thành Học Python trong 30 ngày.
challenge.replace('JavaScript','Python');
console.log(challenge.replace('JavaScript','Python'));
// Ký tự ở index 15 trong chuỗi 'Học JavaScript trong 30 ngày' là gì? Sử dụng phương thức charAt().
console.log(challenge.charAt(15));
// Mã ký tự của J trong chuỗi 'Học JavaScript trong 30 ngày' bằng cách sử dụng là gì charCodeAt()
console.log(challenge.charCodeAt('J'));

// Sử dụng phương thức indexOf để xác định vị trí của lần xuất hiện đầu tiên của từ o trong Học JavaScript trong 30 ngày
console.log(challenge.match(/o/));
// Sử dụng phương thức lastIndexOf để xác định vị trí của lần xuất hiện cuối cùng của từ o trong Học JavaScript trong 30 ngày.
console.log(challenge.lastIndexOf('o'));

// Sử dụng phương thức indexOf để tìm vị trí xuất hiện đầu tiên của từ vì trong câu sau:'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
let stringEx  = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ';
console.log(stringEx.indexOf('vì'));

// Sử dụng phương thức lastIndexOf để tìm vị trí xuất hiện cuối cùng của từ vì trong câu sau:'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(stringEx.lastIndexOf('vì'));

// Sử dụng phương thức search để tìm vị trí xuất hiện đầu tiên của từ vì trong câu sau:'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(stringEx.search('vì'));

// Sử dụng phương thức trim() để xóa mọi khoảng trắng ở đầu và cuối chuỗi. ví dụ ' Học JavaScript trong 30 ngày '.
stringEx = ' Học JavaScript trong 30 ngày ';
console.log(stringEx.trim());
// Sử dụng phương thức startsWith() với chuỗi Học JavaScript trong 30 ngày và làm kết quả thành true.
console.log(stringEx);
console.log(stringEx.trim().startsWith('Học JavaScript trong 30 ngày'));
// Sử dụng phương thức endsWith() với chuỗi Học JavaScript trong 30 ngày và làm cho kết quả thành true.
console.log(stringEx.trim().endsWith('Học JavaScript trong 30 ngày'));

// Sử dụng phương thức match() để tìm tất cả chữ o có trong Học JavaScript trong 30 ngày
let regEx = /o/g;
console.log(challenge.replace('ọ','o'));
challenge = challenge.replace('ọ','o');
console.log(challenge.match(regEx));
// Sử dụng concat() để thêm 'Học JavaScript trong' và '30 ngày' vào 1 chuỗi, 'Học JavaScript trong 30 ngày'
let str1 = 'Học JavaScript trong';
let str2 = ' 30 ngày';
console.log(str1.concat(str2));
// Sử dụng phương thức repeat() để in Học JavaScript trong 30 ngày 2 lần.
console.log(challenge.repeat(2));