// Tìm các mảng con tăng dần
// Viết hàm findAllIncreasingSubArr(numberList) để tìm ra tất cả các mảng con tăng dần có trong mảng
// numberList
// Mảng có tính chất tăng dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn lớn phần từ liền
// trước nó (trừ phần tử đầu tiên)


export function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const Arr = [];
  let subArr = [];
  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index - 1] < numberList[index]) {
      subArr.push(numberList[index - 1]);
    }
    if (
      numberList[index - 1] >= numberList[index] &&
      numberList[index - 1] > numberList[index - 2]
    ) {
      subArr.push(numberList[index - 1]);
      Arr.push(subArr);
      subArr = [];
    }
    if (index === numberList.length - 1 && numberList[index] > numberList[index - 1]) {
      subArr.push(numberList[index]);
      Arr.push(subArr);
    }
  }
  return Arr;
}

