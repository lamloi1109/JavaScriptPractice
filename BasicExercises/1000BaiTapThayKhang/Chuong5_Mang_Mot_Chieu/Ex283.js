// Bài 283: Đảo ngược mảng ban đầu
function reverseArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  return numberList.reverse();
}

function reverseArrayV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  const result = [];
  for (let index = numberList.length - 1; index >= 0; index--) {
    result.push(numberList[index]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayV2([1, 2, 3, 4, 5, 6]));

