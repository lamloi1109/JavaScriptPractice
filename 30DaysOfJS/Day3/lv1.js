// Khai báo biến firstName, lastName, country, city, age, isMarried, year và gán giá trị cho nó và sử dụng toán tử typeof để kiểm tra các kiểu dữ liệu khác nhau.
let firstName = 'Lam';
console.log(typeof firstName);
let lastName = 'Phuoc Loi';
console.log(typeof lastName);
let country = 'VN';
console.log(typeof country);
let city = 'Bac Lieu';
console.log(typeof city);
let age = 24;
console.log(typeof age);
let isMarried = false;
console.log(typeof isMarried);
let year = 2023;
console.log(typeof year);
// Kiểm tra xem kiểu dữ liệu của '10' có giống với 10

console.log( typeof '10' == typeof 10);

// Kiểm tra parseInt('9.8') có bằng 10 không
console.log( parseInt('9.8'));
console.log( parseInt('9.8') == 10);
/*
Giá trị boolean có thể đúng hoặc sai

Viết ba câu lệnh JavaScript cung cấp giá trị đúng.
Viết ba câu lệnh JavaScript cung cấp giá trị sai.
*/
console.log(Boolean(1));
console.log(Boolean("dsads"));
console.log(Boolean([]));
console.log(Boolean({}));

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

/*
Hãy tìm ra kết quả của các biểu thức so sánh sau không sử dụng console.log(). Sau khi làm xong, hãy xác nhận nó bằng console.log()

4 > 3  true
4 >= 3  true
4 < 3  false
4 <= 3 false 
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false 
4 != '4' false
4 == '4' true
4 === '4' false
Tìm độ dài của python và biệt ngữ và đưa ra một câu lệnh so sánh sai

*/
console.log(4 == "4");
console.log(4 === "4");

/* 
4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
Không có 'on' trong cả 2 từ dragon và python
*/
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
4 > 3 && console.log('Bản chất của && là đi tìm giá trị false')
4 < 3 || console.log("Trong khi bản chất của || là đi tìm giá trị true")
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
/*Sử dụng đối tượng Date để làm các câu hỏi sau
Năm nay là năm mấy?
Tháng này là tháng mấy dưới dạng số?
Hôm nay ngày mấy?
Hôm nay là thứ mấy dưới dạng số?
Bây giờ mấy giờ?
Bây giờ mấy phút?
Tìm số giây đã trôi qua kể từ ngày 1, tháng 1, năm 1970 đến bây giờ.
*/
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

