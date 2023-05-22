// Bài 305(*): Tìm dãy con toàn dương có tổng lớn nhất

import { findMaxSumList } from './Ex305.js';

describe('findMaxSumList(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(findMaxSumList(null)).toBe(undefined);
    expect(findMaxSumList(undefined)).toBe(undefined);
    expect(findMaxSumList({})).toBe(undefined);
    expect(findMaxSumList('')).toBe(undefined);
    expect(findMaxSumList(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(findMaxSumList([])).toBe(undefined);
  });

  it('should return arr if arr is positive number list', () => {
    expect(findMaxSumList([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });

  it('should return max sum list', () => {
    expect(findMaxSumList([1, 2, 3, -1, 0, 2, 1])).toEqual([1, 2, 3]);
    expect(findMaxSumList([1, 2, 3, -1, 0, -2, 2, 1, 7])).toEqual([2, 1, 7]);
  });
});
