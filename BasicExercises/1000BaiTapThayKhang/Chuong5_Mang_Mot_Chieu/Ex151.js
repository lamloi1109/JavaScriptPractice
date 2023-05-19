// Bài 151: Hãy tìm số nguyên tố lớn nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về -1

function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

function findMaxPrimeNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return (
    numberList.reduce((maxPrimeNumber, number) => {
      if (isPrimeNumber(number) && number > maxPrimeNumber) {
        maxPrimeNumber = number;
      }
      return maxPrimeNumber;
    }, Number.MIN_SAFE_INTEGER) ?? -1
  );
}
