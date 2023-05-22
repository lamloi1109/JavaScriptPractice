// Bài 309: Tạo mảng b sao cho b[i] = tổng các phần tử lân cận với a[i] trong mảng a

export function generateSumList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const sumList = [];

  for (let index = 2; index < numberList.length; index++) {
    sumList.push(numberList[index - 2] + numberList[index - 1] + numberList[index]);
  }
  return sumList;
}
