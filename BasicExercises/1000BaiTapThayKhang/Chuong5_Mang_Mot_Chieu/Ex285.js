// Bài 285: Đảo ngược thứ tự số dương trong mảng

function reversePositiveNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const result = [];

  for (let index = numberList.length - 1; index >= 0; index--) {
    const number = numberList[index];
    if (number > 0) {
      result.push(number);
    }
  }

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > 0) {
      numberList[index] = result.shift();
    }
  }
  return numberList;
}
