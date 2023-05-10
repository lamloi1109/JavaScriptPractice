// Dãy số nguyên tố nhỏ hơn n
// Viết hàm generatePrimeNumbers(n) để tạo ra mảng các số nguyên tố nhỏ hơn n (0 < n < 1000)

function isPrimeNumber(number) {
  if (typeof number !== 'number' || number < 0 || number < 2) return false;
  if (number === 2) return true;
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

export function generatePrimeNumbers(number) {
  if (typeof number !== 'number' || number < 2 || number > 1000) return [];

  const primeNumberList = [];

  for (let index = 2; index <= number; index++) {
    if (isPrimeNumber(index)) {
      primeNumberList.push(index);
    }
  }

  return primeNumberList;
}

export function generatePrimeNumbersV2(number) {
  if (typeof number !== 'number' || number < 2 || number > 1000) return [];

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .filter(isPrimeNumber);
}
