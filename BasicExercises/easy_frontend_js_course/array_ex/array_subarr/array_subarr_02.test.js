// Tìm các mảng con giảm dần có ít nhất 3 phần tử
// Viết hàm findAllDecreasingSubArr(numberList) để tìm ra tất cả các mảng con giảm dần có độ dài ít nhất
// 3 phần tử

import { findAllDecreasingSubArr } from "./array_subarr_02.js";

describe('findAllDecreasingSubArr(numberList)', () => {
  it('should return [] if list is not an array', () => {
    expect(findAllDecreasingSubArr({})).toEqual([]);
    expect(findAllDecreasingSubArr(null)).toEqual([]);
    expect(findAllDecreasingSubArr(undefined)).toEqual([]);
    expect(findAllDecreasingSubArr('')).toEqual([]);
    expect(findAllDecreasingSubArr(123)).toEqual([]);
  });

  it('should return [] if list is empty', () => {
    expect(findAllDecreasingSubArr([])).toEqual([]);
  });

  it('should return [] if list is increasing number list', () => {
    expect(findAllDecreasingSubArr([1, 2, 3, 4, 5, 6, 7])).toEqual([]);
  });

  it('should return [] if list is decreasing number list 2 item', () => {
    expect(findAllDecreasingSubArr([2, 1, 5, 6, 5, 10, 5])).toEqual([]);
  });

  it('should return correct list', () => {
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]);
  });
});
