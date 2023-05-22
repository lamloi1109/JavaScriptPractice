// Bài 179: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó

function statisticsNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const result = [];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index - 1] > Math.abs(numberList[index])) {
      result.push(numberList[index - 1]);
    }
  }
  return result;
}
