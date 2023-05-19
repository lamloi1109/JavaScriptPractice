// Bài 170: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số nguyên tố nhỏ nhất lớn hơn mọi giá trị có trong mảng

// Nói cách khác bài toán trở thành tìm max rồi tìm số nguyên tố gần nhất tính từ max đã tìm được

// vd max là 10 thì số nguyên tố gần nhất là 11

// Tìm max

// While loop tăng max cho tới khi max là số nguyên tố gần nhất

function findMax(numberList) {
  return numberList.reduce((max, number) => {
    if (max < number) max = number;
    return max;
  }, Number.MIN_SAFE_INTEGER);
}

function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

export function findLowestPrimeNumberByCondition(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  let max = findMax(numberList);

  if (isPrimeNumber(max)) max++;

  while (!isPrimeNumber(max)) {
    max++;
  }
  return max;
}
