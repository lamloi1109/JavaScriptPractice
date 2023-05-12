// Tổng của các chữ số trong mảng
// Viết hàm sumAllDigits(numberList) để tính tổng các chữ số của từng số trong mảng numberList

// Delegate
function getSumAllNumber(number) {
  let remaining = number;
  let sum = 0;
  while (remaining > 0) {
    let lastNumber = remaining % 10;
    sum = sum + lastNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return sum;
}

export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }
  if (numberList.length === 1) {
    return numberList[0];
  }

  let sum = 0;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    sum = sum + getSumAllNumber(number);
  }

  return sum;
}

export function sumAllDigitsV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }
  if (numberList.length === 1) {
    return numberList[0];
  }

  return numberList.reduce((sum, number) => sum + getSumAllNumber(number), 0);
}
