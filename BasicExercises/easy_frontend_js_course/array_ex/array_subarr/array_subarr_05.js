// Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
// Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về tổng
// của mảng con đó.

export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }

  const subArrList = [];
  let sum = 0;
  for (let index = 1; index < numberList.length; index++) {
    const number = numberList[index - 1];
    const afterNumber = numberList[index];

    if (number < afterNumber) {
      sum += number;
    }

    // 1 < 2, 2 < 3, 3 > 0 -> 3 ko đc add vào tổng
    // Để add 3 vào tổng nó phải lớn hơn hoặc bằng thằng đứng trước và lớn hơn thằng đứng sau nó
    // Điều này phá vớ đk dãy số tăng dần -> 3 là số cuối -> add 3 vào -> reset tổng
    const needToResetSum = number >= afterNumber && index - 2 > 0 && number > numberList[index - 2];
    if (needToResetSum) {
      sum += number;
      subArrList.push(sum);
      sum = 0;
    }

    const needToFinishedSum = index === numberList.length - 1 && number < afterNumber;
    if (needToFinishedSum) {
      sum += afterNumber;
      subArrList.push(sum);
    }
  }

  return subArrList.sort((a, b) => b - a)[0] ?? 0;
}
