// Kiểm tra có số lẻ và chia hết cho 3 không
// Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
// chia hết cho 3 không?
export function hasOddNumberDivisibleBy3(numberList) {
  if (numberList.length === 0) return false;
  for (let index = 0; index < numberList.length; index++) {
    const element = numberList[index];
    if (element % 3 === 0) return true;
  }
  return false;
}

export function hasOddNumberDivisibleBy3V2(numberList) {
  if (numberList.length === 0) return false;
  let result = false;
  numberList.forEach((element) => {
    if (element % 3 === 0) result = true;
  });
  return result;
}

export function hasOddNumberDivisibleBy3V3(numberList) {
  if (numberList.length === 0) return false;

  return numberList.some((n) => n % 3 === 0);
}
