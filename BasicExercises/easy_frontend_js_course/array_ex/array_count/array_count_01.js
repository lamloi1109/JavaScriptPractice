// Ðếm số dương chẵn có trong mảng
// Viết hàm countPositiveEvenNumbers(numberList) để đếm có bao nhiêu số dương chẳn có trong mảng.

function isPositiveEvenNumber(number) {
  return number > 0 && number % 2 === 0;
}

// for i
// for of
// for each

export function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }
  let countNumber = 0;

  numberList.forEach((number) => {
    if (isPositiveEvenNumber(number)) countNumber++;
  });

  return countNumber;
}

// filter

export function countPositiveEvenNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }

  return numberList.filter(isPositiveEvenNumber).length;
}

// reduce

export function countPositiveEvenNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }

  return numberList.reduce((acc, curr) => {
    if (isPositiveEvenNumber(curr)) acc++;
    return acc;
  }, 0);
}
