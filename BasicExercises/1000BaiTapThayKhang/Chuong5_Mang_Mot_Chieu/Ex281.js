// Bài 281: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng

export function processArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList
    .filter((number) => number !== 0 && number % 2 === 0)
    .concat(numberList.filter((number) => number === 0))
    .concat(numberList.filter((number) => number % 2 !== 0));
}

export function processArrayV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  numberList = numberList.sort((a, b) => b - a);
  let i = 0;
  let j = numberList.length - 1;

  while (i < j) {
    if (numberList[i] % 2 === 0) {
      i++;
    }
    if (numberList[j] % 2 !== 0) {
      j--;
    }
    if (numberList[j] === 0 && numberList[i] % 2 !== 0) {
      [numberList[i], numberList[j]] = [numberList[j], numberList[i]];
    }
  }

  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i - 1] % 2 === 0) {
      i++;
    }
    if (numberList[i - 1] === 0 && numberList[i] % 2 === 0) {
      [numberList[i - 1], numberList[i]] = [numberList[i], numberList[i - 1]];
    }
  }

  return numberList;
}
