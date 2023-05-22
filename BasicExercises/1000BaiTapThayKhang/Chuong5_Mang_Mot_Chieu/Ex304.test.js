// Bài 304(*): Cho mảng a, số nguyên M. Tìm 1 mảng con sao cho tổng các phần tử bằng M

import { findSubArray } from './Ex304.js';

describe('findSubArray(arr, M)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(findSubArray(null, 1)).toBe(undefined);
    expect(findSubArray(undefined, 1)).toBe(undefined);
    expect(findSubArray({}, 1)).toBe(undefined);
    expect(findSubArray('', 1)).toBe(undefined);
    expect(findSubArray(123, 1)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(findSubArray([], 1)).toBe(undefined);
  });

  it('should return list', () => {
    expect(findSubArray([1, 2, 3, 4, 5, 6, 7, 8, 1, -1], 0)).toEqual([1, -1]);
    expect(findSubArray([1, 2, 3, 4], 6)).toEqual([1, 2, 3]);
    expect(findSubArray([5, 4, 1, 2, 3], 6)).toEqual([1, 2, 3]);
    expect(findSubArray([4, 1, 2, 3, 4], 6)).toEqual([1, 2, 3]);
  });
});
