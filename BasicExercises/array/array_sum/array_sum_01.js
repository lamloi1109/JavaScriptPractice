// Tổng các số chẳn mà nó lớn hơn số trước đó.
// Viết hàm sumEvenNumbers(numberList) để tính tổng các số chẵn có giá trị lớn hơn số liền kế trước đó.
export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let sum = 0;
  let prevNumber = Number.MIN_SAFE_INTEGER;
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number % 2 === 0 && number > prevNumber) {
      sum = sum + number;
    }
    prevNumber = number;
  }

  return sum;
}

console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
