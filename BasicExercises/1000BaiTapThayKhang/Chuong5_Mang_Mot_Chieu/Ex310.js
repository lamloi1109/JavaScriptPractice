// Bài 310: Tạo mảng b chỉ chứa số nguyên tố từ mảng a

function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

export function generatePrimeNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.filter((number) => isPrimeNumber(number));
}
