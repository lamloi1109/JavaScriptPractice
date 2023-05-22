// Bài 188: Hãy liệt kê các vị trí chẵn lớn nhất trong mảng 1 chiều các số nguyên

export function statisticsHighestEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let maxEvenNumber = Number.MIN_SAFE_INTEGER;
  let maxEvenNumberIndexList = [];
  numberList.forEach((number, index) => {
    if (number === maxEvenNumber) {
      maxEvenNumberIndexList.push(index);
    }
    if (number > 0 && number % 2 === 0 && number > maxEvenNumber) {
      maxEvenNumber = number;
      maxEvenNumberIndexList = [];
      maxEvenNumberIndexList.push(index);
    }
  });
  return maxEvenNumberIndexList;
}
console.log(statisticsHighestEvenNumber([1, 2, 3, 1, 3]));
