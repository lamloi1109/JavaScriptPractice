// Bài 31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không

export function isPrimeNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number < 2) return false;

  if (number === 2) {
    return true;
  }

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }

  return true;
}
