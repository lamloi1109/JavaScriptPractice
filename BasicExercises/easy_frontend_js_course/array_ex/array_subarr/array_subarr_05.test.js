// Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
// Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về tổng
// của mảng con đó.

import { findMaxSumArray } from './array_subarr_05.js';

describe('findMaxSumArray(numberList)', () => {
  it('should return 0 if list is not an arr', () => {
    expect(findMaxSumArray({})).toBe(0);
    expect(findMaxSumArray(null)).toBe(0);
    expect(findMaxSumArray(undefined)).toBe(0);
    expect(findMaxSumArray('')).toBe(0);
    expect(findMaxSumArray(123)).toBe(0);
  });
  it('should return 0 if list is empty arr', () => {
    expect(findMaxSumArray([])).toBe(0);
  });
  it('should return 0 if list is all zero number', () => {
    expect(findMaxSumArray([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return maxSum', () => {
    expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toBe(30);
  });
});
