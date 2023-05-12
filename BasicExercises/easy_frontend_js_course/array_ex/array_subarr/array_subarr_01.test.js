// Tìm các mảng con tăng dần
// Viết hàm findAllIncreasingSubArr(numberList) để tìm ra tất cả các mảng con tăng dần có trong mảng
// numberList
// Mảng có tính chất tăng dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn lớn phần từ liền
// trước nó (trừ phần tử đầu tiên)

import { findAllIncreasingSubArr } from './array_subarr_01.js';

describe('findAllIncreasingSubArr(numberList)', () => {
  it('should return [] if list is not an array', () => {
    expect(findAllIncreasingSubArr({})).toEqual([]);
    expect(findAllIncreasingSubArr(null)).toEqual([]);
    expect(findAllIncreasingSubArr(undefined)).toEqual([]);
    expect(findAllIncreasingSubArr('')).toEqual([]);
    expect(findAllIncreasingSubArr(123)).toEqual([]);
  });
  it('should return [] if list is empty', () => {
    expect(findAllIncreasingSubArr([])).toEqual([]);
  });

  it('should return [] if list is does not have increasing number', () => {
    expect(findAllIncreasingSubArr([5, 4, 3, 2, 1, 0])).toEqual([]);
  });

  it('should return [] if list is increasing number list', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('should return correct sub array increasing number', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);
  });
});
