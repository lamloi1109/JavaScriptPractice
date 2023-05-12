// Tìm số lớn thứ 2 trong mảng
// Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList

// numberList.length > 1

export function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return undefined;

  let lastMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] > secondMax && numberList[index] < lastMax) {
      secondMax = numberList[index];
    }

    if (numberList[index] > lastMax) {
      secondMax = lastMax;
      lastMax = numberList[index];
    }
    if (secondMax > lastMax) {
      lastMax = secondMax;
    }
  }
  return secondMax === Number.MIN_SAFE_INTEGER ? undefined : secondMax;
}

export function findSecondLargestNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return undefined;

  let lastMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  for (let number of numberList) {
    if (number > secondMax && number < lastMax) {
      secondMax = number;
    }

    if (number > lastMax) {
      secondMax = lastMax;
      lastMax = number;
    }
    if (secondMax > lastMax) {
      lastMax = secondMax;
    }
  }
  return secondMax === Number.MIN_SAFE_INTEGER ? undefined : secondMax;
}

export function findSecondLargestNumberV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return undefined;

  let lastMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  numberList.forEach((number) => {
    if (number > secondMax && number < lastMax) {
      secondMax = number;
    }
    if (number > lastMax) {
      secondMax = lastMax;
      lastMax = number;
    }
    if (secondMax > lastMax) {
      lastMax = secondMax;
    }
  });

  return secondMax === Number.MIN_SAFE_INTEGER ? undefined : secondMax;
}

export function findSecondLargestNumberV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return undefined;

  return numberList.sort((a, b) => b - a)[1] ===
    numberList.sort((a, b) => b - a)[0]
    ? undefined
    : numberList.sort((a, b) => b - a)[1];
}

console.log(findSecondLargestNumber([10, 10, 10]));
