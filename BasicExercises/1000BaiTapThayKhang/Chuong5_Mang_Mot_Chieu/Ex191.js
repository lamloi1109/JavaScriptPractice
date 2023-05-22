// Bài 191: Hãy liệt kê các giá trị cực đại trong mảng 1 chiều các số thực. Một phần tử được gọi là cực đại khi lớn hơn các phần tử lân cận

export function statisticsMaximumNumberInList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const maximumList = [];

  for (let index = 2; index < numberList.length; index++) {
    if (index - 3 < 0 && numberList[index - 2] > numberList[index - 1]) {
      maximumList.push(numberList[index - 2]);
    }
    if (index === numberList.length - 1 && numberList[index] > numberList[index - 1]) {
      maximumList.push(numberList[index]);
    }

    if (
      numberList[index - 1] > numberList[index - 2] &&
      numberList[index - 1] > numberList[index]
    ) {
      maximumList.push(numberList[index - 1]);
    }
  }
  return maximumList;
}

console.log(statisticsMaximumNumberInList([1, 3, 2, 4, 1, 2, 0]));
