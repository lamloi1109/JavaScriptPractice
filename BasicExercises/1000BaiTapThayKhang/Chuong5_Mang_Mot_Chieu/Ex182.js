// Bài 182: Cho mảng 1 chiều các số thực. Hãy viết hàm liệt kê tất cả các giá trị trong mảng có ít nhất 1 lận cận trái dấu với nó

export function statisticsNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const result = [];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index - 1] * numberList[index] < 0) {
      if (index >= 2 && numberList[index - 2] * numberList[index - 1] < 0) {
        result.push(numberList[index]);
        continue;
      }
      result.push(numberList[index - 1]);
      result.push(numberList[index]);
    }
  }

  return result;
}

console.log(statisticsNumber([1, -1, 1, -2, 3, 5, 6]));
