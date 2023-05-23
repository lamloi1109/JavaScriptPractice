// Bài 287: Dịch phải xoay vòng k phần tử trong mảng

function turnRight(numberList, k) {
  if (!Array.isArray(numberList) || numberList.length === 0 || !Number.isInteger(k)) {
    return undefined;
  }

  if (k < 0 || k > numberList.length) {
    return undefined;
  }

  let count = k - 1;

  while (count > 0) {
    let lastNumber = numberList[0];
    for (let index = 1; index < numberList.length; index++) {
      numberList[index - 1] = numberList[index];
    }
    numberList[numberList.length - 1] = lastNumber;
    count--;
  }
  return numberList;
}

console.log(turnRight([1, 2, 3, 4, 5], 2));
