// Bài 305(*): Tìm dãy con toàn dương có tổng lớn nhất

export function findMaxSumList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0) {
      sum = 0;
      continue;
    }
    if (numberList[i] > 0) {
      sum = sum + numberList[i];
    }
    if (max < sum) {
      max = sum;
    }
  }
  let result = [];
  sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0) {
      sum = 0;
      result = [];
    }
    if (numberList[i] > 0) {
      sum = sum + numberList[i];
      result.push(numberList[i]);
    }
    if (sum === max) {
      return result;
    }
  }

  return numberList;
}
console.log(findMaxSumList([1, 2, 3, -1, 0, -2, 2, 1, 7]));
