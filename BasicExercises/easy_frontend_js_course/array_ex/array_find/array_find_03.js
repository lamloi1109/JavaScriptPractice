// Tìm số dương chẵn đầu tiên trong mảng
// Viết hàm findFirstPositiveEven(numberList) để tìm ra số dương chẵn đầu tiên trong mảng numberList

// SỐ dương > 0
// Số chẵn % 2 === 0

// numberList is not an array
// numberList is empty array

// NumberList does not have positive number
// NumberList does not have even numbers
// NumberList has positive number even

function isPositiveEvenNumber(number) {
  return number > 0 && number % 2 === 0;
}

export function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isPositiveEvenNumber(number)) return number;
  }
  return undefined;
}

export function findFirstPositiveEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let number of numberList) {
    if (isPositiveEvenNumber(number)) return number;
  }
  return undefined;
}

export function findFirstPositiveEvenV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let hasPositiveEvenNumber;

  numberList.reverse().forEach((number) => {
    if (isPositiveEvenNumber(number)) hasPositiveEvenNumber = number;
  });

  return hasPositiveEvenNumber;
}

export function findFirstPositiveEvenV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.find(isPositiveEvenNumber);
}

export function findFirstPositiveEvenV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList[numberList.find(isPositiveEvenNumber)];
}

export function findFirstPositiveEvenV6(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.filter(isPositiveEvenNumber)[0];
}
