// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
// 0 < n < 1000000
// Số giảm dần có ít nhất 2 chữ số
// Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần, ngược lại trả về false

export function isDeCreasingNumber(number) {
  if (typeof number !== "number" || number < 10 || number > 1000000)
    return false;
  let remainingNumber = number;
  let prevNumber = -1;
  while (remainingNumber > 0) {
    let lastNumber = remainingNumber % 10;
    if (lastNumber <= prevNumber) {
      return false;
    }
    prevNumber = lastNumber;
    remainingNumber = Math.trunc(remainingNumber / 10);
  }
  return true;
}

export function isDeCreasingNumberV2(number) {
  if (typeof number !== "number" || number < 10 || number > 1000000)
    return false;
  // Chuyển số sang string để so sánh
  let numberStringList = number.toString();
  for (let index = 1; index < numberStringList.length; index++) {
    const element = numberStringList[index];
    if (numberStringList[index - 1] <= numberStringList[index]) {
      return false;
    }
  }
  // Nguyên nhân có thể so sánh các số nhau mặc dù chúng đang ở dạng String
  // Là vì khi so sánh 2 String với nhau thì nó sẽ so sánh từng ký tự theo thứ tự từ điển
  // Mã ASCII Nếu chúng giống nhau thì sang thằng tiếp theo 
  // String ở nào ở sau thì lớn hơn
  // Cho đến khi hết chuỗi
  // Nếu phía trước bằng nhau thì thằng nào dài hơn thằng đó lớn hơn
  // VD 'Big' với 'BigBang' -> BigBang > Big
  return true;
}
