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

import { findMissingNumber } from "./logic_02.js";

describe('findMissingNumber(numberList, number)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMissingNumber({}, 5)).toBe(undefined);
    expect(findMissingNumber(null, 5)).toBe(undefined);
    expect(findMissingNumber(undefined, 5)).toBe(undefined);
    expect(findMissingNumber('', 5)).toBe(undefined);
    expect(findMissingNumber(123, 5)).toBe(undefined);
  });
  it('should return undefined if list is empty', () => {
    expect(findMissingNumber([], 5)).toBe(undefined);
  });

  it('should return correct missing number', () => {
    expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toBe(7);
    expect(findMissingNumber([5], 6)).toBe(6);

  });
});
