// Bài 125: Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng

function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

function countPrimeNumberLessThan100(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let count = 0;
  const targetNumber = 100;
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isPrimeNumber(number) && number < targetNumber) count++;
  }

  return count;
}

console.log(countPrimeNumberLessThan100([2, 5, 7, 13, 11, 98, 97, 89]));
