// Bài 152: Hãy tìm số hoàn thiện nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về -1

function isPerfectNumber(number) {
  let sum = 0;

  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      sum += index;
    }
  }
  return sum === number;
}

function findMinPerfectNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return (
    numberList.reduce((minPerfectNumber, number) => {
      if (isPerfectNumber(number) && number < minPerfectNumber) {
        minPerfectNumber = number;
      }
      return minPerfectNumber;
    }, Number.MAX_SAFE_INTEGER) ?? -1
  );
}
