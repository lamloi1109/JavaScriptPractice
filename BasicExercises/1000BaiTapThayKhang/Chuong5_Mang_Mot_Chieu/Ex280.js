// Bài 280: Hãy đưa số 1 về đầu mảng
// Đưa phần từ thứ k về đầu mảng

function moveKNumberToRight(numberList, k) {
  if (!Array.isArray(numberList) || numberList.length === 0 || !Number.isInteger(k)) {
    return undefined;
  }

  if (k > numberList.length - 1 || k < 0) {
    return undefined;
  }

  let count = numberList.length - k;
  while (count > 0) {
    const targetNumber = numberList[numberList.length - 1];
    for (let index = numberList.length - 1; index > 0; index--) {
      numberList[index] = numberList[index - 1];
    }
    numberList[0] = targetNumber;
    count--;
  }

  return numberList;
}

console.log(moveKNumberToRight([1, 2, 3, 4, 5], 2));
