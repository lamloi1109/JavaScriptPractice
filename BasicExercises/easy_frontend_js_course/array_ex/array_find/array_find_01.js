// Kẻ lười biếng không có quyền than vẫn
// Kém cỏi củng được miễn là đừng lười biếng nữa
// Xử lý mảng tìm kiếm phần tử

// Tìm số dương nhỏ nhất trong mảng
// Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng

function isPositiveNumber(number) {
  // 0 ko phải là số nguyên âm cũng k phải là số nguyên dương
  return number > 0;
}

export function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  // Sự khác nhau ở các version nằm ở cách loop qua danh sách các số
  let min = numberList[0];
  for (let index = 1; index < numberList.length; index++) {
    const number = numberList[index];
    if (!isPositiveNumber(min) && isPositiveNumber(number)) {
      min = number;
    }
    if (min > number) {
      min = number;
    }
  }
  return isPositiveNumber(min) ? min : undefined;
}

export function findMinPositiveV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  numberList = numberList.sort((a, b) => a - b);
  let min = numberList[0];

  if (isPositiveNumber(min)) return min;

  for (let index = 1; index < numberList.length; index++) {
    const number = numberList[index];
    if (isPositiveNumber(number)) {
      return number;
    }
  }
  return undefined;
}

// OMG 0 - 0
export function findMinPositiveV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  return numberList.filter(isPositiveNumber).sort((a, b) => a - b)[0];
}
