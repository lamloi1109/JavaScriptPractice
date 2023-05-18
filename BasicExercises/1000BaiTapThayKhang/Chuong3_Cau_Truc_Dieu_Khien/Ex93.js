// Bài 93: Viết chương trình kiểm tra 1 số có phải là số nguyên tố hay không

function isPrimeNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
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

console.log(isPrimeNumber(11));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(13));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(20));
