// Bài 187: Hãy liệt kê các vị trí mà giá trị tại các vị trí đó bằng giá trị dương nhỏ nhất trong mảng 1 chiều các số thực

import { statisticsIndex } from './Ex187.js';

describe('statisticsIndex(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsIndex(null)).toBe(undefined);
    expect(statisticsIndex(undefined)).toBe(undefined);
    expect(statisticsIndex({})).toBe(undefined);
    expect(statisticsIndex('')).toBe(undefined);
    expect(statisticsIndex(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsIndex([])).toBe(undefined);
  });

  it('should return [] if list is negative', () => {
    expect(statisticsIndex([-1, -2, -4])).toEqual([]);
  });

  it('should return correct list', () => {
    expect(statisticsIndex([1, 2, 3, 1, 1])).toEqual([0, 3, 4]);
    expect(statisticsIndex([-1, 1, -3, 1, 4, 5, 6, 1])).toEqual([1, 3, 7]);
  });
});
