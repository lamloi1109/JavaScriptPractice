// Kiểm tra số chính phương
// Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
// 0 < n < 100000
// Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
// Trả về true nếu là số chính phương, ngược lại trả về false.
// Ví dụ: 4, 9, 25, 36 là các số chính phương
export function isPerfectSquare(number) {
  if (typeof number !== "number" || number < 0 || number > 100000) {
    return false;
  }
  let lastNumber = number % 10;
  if (number > 9 && [2, 3, 7, 8].includes(lastNumber)) {
    return false;
  }
  // Từ bài toán check số chính phương -> check số tự nhiên
  const sqrtNumber = Math.sqrt(number) * 10;
  // VD: 12 lấy căn -> 3.46xx * 10 ~ 34.6
  // 34.6 % 10 !== 0 -> ko phải số tự nhiên
  const modNumber = sqrtNumber % 10;
  return modNumber === 0;
}

export function isPerfectSquareV2(number) {
  if (typeof number !== "number" || number < 0 || number > 100000) {
    return false;
  }
  let lastNumber = number % 10;
  if (number > 9 && [2, 3, 7, 8].includes(lastNumber)) {
    return false;
  }
  // Tham khảo trên mạng
  const sqrtNumber = parseInt(Math.sqrt(number));

  return sqrtNumber * sqrtNumber === number;
}
