// Bài 148: Tìm số nguyên tố cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về  -1

function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

function findLastPrimeNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.reduce((primeNumber, number) => {
    if (isPrimeNumber(number)) primeNumber = number;
    return primeNumber;
  }, -1);
}
console.log(findLastPrimeNumber([1, 2, 3, 4, 5, 6, 7, 11]));
