// Kiểm tra mảng có tăng dần không
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// 1. Có ít nhất 2 phần tử.
// 2. Phần tử sau luôn lớn hơn p

// for i
export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] <= numberList[index - 1]) return false;
  }
  return true;
}
// Chuyển thành số -> Kiểm tra số tăng dần
function isIncreasingNumber(number) {
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

export function isIncreasingNumberListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;
  let number = Number(numberList.join(""));
  return isIncreasingNumber(number);
}
console.log(isIncreasingNumberListV2([1, 2, 3, 4]));

