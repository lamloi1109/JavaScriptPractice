// Bài 284: Đảo ngược thứ tự các số chẵn trong mảng


function reverseEvenNumberInArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const result = [];

  for (let index = numberList.length - 1; index >= 0; index--) {
    if (numberList[index] % 2 === 0) {
      result.push(numberList[index]);
    }
  }

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] % 2 === 0) {
      numberList[index] = result.shift();
    }
  }

  return numberList;
}

console.log(reverseEvenNumberInArray([1, 2, 3, 4, 5, 6, 7, 8]));
