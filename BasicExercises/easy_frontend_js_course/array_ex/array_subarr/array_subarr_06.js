// Tìm mảng con tăng dần có tổng lớn nhất, trả về mảng con đầu tiên
// Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về mảng
// con đó.

export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const subArrList = [];
  // { sum: 30
  //   arr: [a,b,c,d]
  //}
  let subObj = {
    sum: 0,
    subArr: [],
  };

  for (let index = 1; index < numberList.length; index++) {
    const number = numberList[index - 1];
    const afterNumber = numberList[index];

    if (number < afterNumber) {
      subObj.sum += number;
      subObj.subArr.push(number);
    }

    const needToResetSum = number >= afterNumber && index - 2 > 0 && number > numberList[index - 2];
    if (needToResetSum) {
      subObj.sum += number;
      subObj.subArr.push(number);
      subArrList.push(subObj);
      subObj = {
        sum: 0,
        subArr: [],
      };
    }
    const needToFinishedSum = index === numberList.length - 1 && number < afterNumber;
    if (needToFinishedSum) {
      subObj.sum += afterNumber;
      subObj.subArr.push(afterNumber);
      subArrList.push(subObj);
    }
  }
  return subArrList.sort((a, b) => b.sum - a.sum)[0]?.subArr ?? [];
}

console.log(findMaxSumArray([1, 2, 3, 0, 2, 4]));
