//  'Tình yêu là điều tuyệt vời nhất trên thế giới này. Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.' Đếm số từ tình yêu trong câu này.
let str = 'Tình yêu là điều tuyệt vời nhất trên thế giới này. Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.';
let regEx = /tình yêu/g;
console.log(str.toLowerCase().match(regEx).length);
// Sử dụng match() để đếm số lần từ vì trong câu sau:'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'_
str = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ';
console.log(str.match(/vì/g).length);
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Tính tổng thu nhập hàng năm của người đó bằng cách trích các số từ văn bản sau. 'Anh ấy kiếm được 5000 euro từ lương mỗi tháng, 10000 euro tiền thưởng hàng năm, các khóa học trực tuyến 15000 euro mỗi tháng.'
regEx = /([1-9].[0]{0,4})/g;
str =  'Anh ấy kiếm được 5000 euro từ lương mỗi tháng, 10000 euro tiền thưởng hàng năm, các khóa học trực tuyến 15000 euro mỗi tháng.';
let res = str.match(regEx) + "";
res = res.split(',');
let solary = Number(res[0])*12 + Number(res[1]) + Number(res[2])*12;
console.log(solary);
