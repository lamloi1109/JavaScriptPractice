// Bài 184: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên

function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

export function statisticsPrimeNumberIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const primeNumberIndexList = [];

  numberList.forEach((number, index) => {
    if (isPrimeNumber(number)) primeNumberIndexList.push(index);
  });

  return primeNumberIndexList;
}
