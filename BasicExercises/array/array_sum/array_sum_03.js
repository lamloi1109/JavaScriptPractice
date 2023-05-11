// Tổng các chữ số nhỏ nhất của số trong mảng
// Viết hàm sumAllMinDigits(numberList) để tính tổng các chữ số nhỏ nhất của từng số trong mảng
// numberList

// Delegate
function getMinNumber(number) {
  let remaining = number;
  let minNumber = Number.MAX_SAFE_INTEGER;
  while (remaining > 0) {
    let lastNumber = remaining % 10;
    minNumber = lastNumber < minNumber ? lastNumber : minNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return minNumber;
}

export function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    sum = sum + getMinNumber(number);
  }

  return sum;
}

export function sumAllMinDigitsV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }

  return numberList.reduce((sum, number) => sum + getMinNumber(number), 0);
}
