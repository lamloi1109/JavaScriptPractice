// Bài 144: Tìm số nguyên tố đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  – 1

function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

function findFirstPrimeNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.find((number) => isPrimeNumber(number)) ?? -1;
}
