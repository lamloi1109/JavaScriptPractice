// Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// n is not a number
// n < 0 || n > 1000000
// sum % 10 !== 0
export function isDivisibleBy10(number) {
  if (typeof number !== "number" || number <= 10 || number > 1000000)
    return false;
  let remaining = number;
  let sum = 0;
  while (remaining > 0) {
    let lastNumber = remaining % 10;
    sum = sum + lastNumber;
    remaining = remaining - lastNumber;
    remaining = remaining / 10;
  }
  return sum % 10 === 0;
}

// Chuyển thành mảng ký tự số r dùng reduce tính tổng lúc tính tổng
// Chuyển ký tự lại thành số

export function isDivisibleBy10V2(number) {
  if (typeof number !== "number" || number <= 10 || number > 1000000)
    return false;
  let remaining = number.toString();
  let remainingSplit = remaining.split("");
  return (
    remainingSplit.reduce((sum, curr) => {
      return parseInt(sum) + parseInt(curr);
    }, 0) % 10 === 0 );
}
