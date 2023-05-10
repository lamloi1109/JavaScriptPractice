// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.

// function isIncreasingNumber(n)
// n is not a number -> false
// n < 0
// n > 1000000
// n.length < 2

export function isIncreasingNumber(number) {
  if (
    typeof number !== "number" ||
    number < 0 ||
    number > 1000000 ||
    number < 10
  )
    return false;
  let remaining = number;
  let prevDigit = 10;

  while (remaining > 0) {
    let lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) {
      return false;
    }
    prevDigit = lastDigit;
    remaining = Math.floor(remaining / 10);
  }
  return true;
}

console.log(isIncreasingNumber(121));

export function isIncreasingNumberV2(number) {
  if (
    typeof number !== "number" ||
    number < 0 ||
    number > 1000000 ||
    number < 10
  )
    return false;
  const numberList = number.toString();
  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] <= numberList[index - 1]) return false;
  }
  return true;
}
