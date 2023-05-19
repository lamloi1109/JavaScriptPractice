// Bài 145: Tìm số hoàn thiện đầu tiên trong mảng 1 chiều số nguyên. Nếu mảng không có số hoàn thiện thì trả về  -1

function isPerfectNumber(number) {
  let sum = 0;

  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      sum += index;
    }
  }
  return sum === number;
}

function findFirstPerfectNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.find((number) => isPerfectNumber(number));
}
