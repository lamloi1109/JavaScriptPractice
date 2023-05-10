// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true

// n is not a number
// sum is not a number
// n < 9 || n > 1000000
// sum < 0 || sum > 19

// Lấy ra từng số r tính sum

// Chuyển thành mảng r tính sum

export function hasTwoDigitsWithSum(number, sum) {
  if (
    typeof number !== "number" ||
    typeof sum !== "number" ||
    number < 9 ||
    number > 1000000 ||
    sum < 0 ||
    sum > 19
  )
    return false;
  let remaining = number;
  let sumOfNumber = 0;
  while (remaining > 0) {
    let lastNumber = remaining % 10;
    sumOfNumber = sumOfNumber + lastNumber;
    remaining = remaining - lastNumber;
    remaining = remaining / 10;
  }
  return sumOfNumber === sum;
}

export function hasTwoDigitsWithSumV2(number, sum) {
  if (
    typeof number !== "number" ||
    typeof sum !== "number" ||
    number < 9 ||
    number > 1000000 ||
    sum < 0 ||
    sum > 19
  )
    return false;
  let remaining = number.toString();
  let remainingSplit = remaining.split("");
  let sumOfNumber = remainingSplit.reduce((sumNumber, curr) => {
    return parseInt(sumNumber) + parseInt(curr);
  }, 0);
  return sumOfNumber === sum;
}
console.log(hasTwoDigitsWithSum(11, 2));