// Tìm số bị thiếu cho trong một mảng từ [5..n]
// Viết hàm findMissingNumber(numberList, n) để tìm ra con số bị thiếu trong dãy số [5..n]
// Mảng numberList sẽ đảm bảo chỉ chứa các con số trong phạm vi từ 5 đến n.
// Mỗi số chỉ xuất hiện một lần trong mảng.
// Chắc chắn sẽ luôn có một con số bị thiếu trong mảng (ko hơn, ko kém)

// Công thức tính tổng từ 1 đến n:
// sum = n * (n + 1) / 2

// [5...n] -> [1...n] - [1...4] = [5 ... n]
// -> Bài toán tính tổng từ 1 đến n
// sum 1 -> n - sum 1 -> 4 - sum numberList -> số đã thiếu

function sumOneToNumber(number) {
  return (number * (number + 1)) / 2;
}

export function findMissingNumber(numberList, number) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const sumOneToN = sumOneToNumber(number);

  const sumOneToFour = sumOneToNumber(4);

  const sumNumberList = numberList.reduce((sum, curr) => sum + curr, 0);

  return sumOneToN - sumOneToFour - sumNumberList;
}

console.log(findMissingNumber([5, 6, 8, 9, 10],10));
