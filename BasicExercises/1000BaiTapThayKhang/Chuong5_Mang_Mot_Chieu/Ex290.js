//Bài 290: Đảo ngược thứ tự số chẵn và lẻ trong mảng nhưng giữ vị trí tương đối
// 1 2 3 4 5 6 -> 5 6 3 4 1 2
// 1 1 2 2 3 3 4 4 -> 3 3 4 4 1 1 2 2

function reverseArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let result = [];

  for (let index = numberList.length - 1; index >= 0; index--) {
    if (numberList[index] % 2 !== 0) {
      result.push(numberList[index]);
    }
  }

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] % 2 !== 0) {
      numberList[index] = result.shift();
    }
  }

  result = [];

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

