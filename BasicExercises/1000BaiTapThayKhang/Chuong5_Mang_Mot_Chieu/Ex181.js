// Bài 181: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị chẵn có ít nhất 1 lân cận cũng là giá trị chẵn

function statisticsEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const result = [];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index - 1] % 2 === 0) {
      result.push(numberList[index]);
    }
    if (numberList[index] % 2 === 0) {
      if (index >= 2 && numberList[index - 2] % 2 === 0) continue;
      result.push(numberList[index - 1]);
    }
  }
  return result;
}

console.log(statisticsEvenNumber([1, 2, 2, 4, 3, 4, 5, 6]));
