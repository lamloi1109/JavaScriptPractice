// Tìm mảng con tăng dần có tổng lớn nhất, trả về mảng con đầu tiên
// Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về mảng
// con đó.

import { findMaxSumArray } from "./array_subarr_06.js";

describe('findMaxSumArray(numberList)', () => {
  it('should return [] if list is not an arr', () => {
    expect(findMaxSumArray({})).toEqual([]);
    expect(findMaxSumArray(null)).toEqual([]);
    expect(findMaxSumArray(undefined)).toEqual([]);
    expect(findMaxSumArray('')).toEqual([]);
    expect(findMaxSumArray(123)).toEqual([]);
  });
  it('should return [] if list is empty arr', () => {
    expect(findMaxSumArray([])).toEqual([]);
  });
  it('should return [] if list is all zero number', () => {
    expect(findMaxSumArray([0, 0, 0, 0, 0])).toEqual([]);
  });

  it('should return maxSum', () => {
    expect(findMaxSumArray([1, 2, 3, 0, 2, 4])).toEqual([1, 2, 3]);
  });
});
