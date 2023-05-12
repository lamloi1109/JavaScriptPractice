// Tìm các mảng con giảm dần có ít nhất 3 phần tử
// Viết hàm findAllDecreasingSubArr(numberList) để tìm ra tất cả các mảng con giảm dần có độ dài ít nhất
// 3 phần tử

export function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const resultArr = [];
  let subArr = [];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index - 1] > numberList[index]) {
      subArr.push(numberList[index - 1]);
    }

    if (
      numberList[index - 1] <= numberList[index] &&
      numberList[index - 1] < numberList[index - 2]
    ) {
      subArr.push(numberList[index - 1]);
      resultArr.push(subArr);
      subArr = [];
    }

    if (index === numberList.length - 1 && numberList[index] < numberList[index - 1]) {
      subArr.push(numberList[index]);
      resultArr.push(subArr);
    }
  }

  return resultArr.filter((subArr) => subArr.length >= 3);
}
