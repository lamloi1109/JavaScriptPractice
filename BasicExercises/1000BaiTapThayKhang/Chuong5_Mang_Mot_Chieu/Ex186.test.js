// Bài 186: Hãy liệt kê các vị trí trong mảng 1 chiều các số thực mà giá trị tại đó bằng giá trị âm đầu tiên trong mảng

import { statisticsIndex } from "./Ex186.js";

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

  it('should return [] if arr does not have negative number', () => {
    expect(statisticsIndex([1, 3, 4, 5])).toEqual([]);
  });

  it('should return correct list', () => {
    expect(statisticsIndex([1, 3, -2, 4, 5, -2, -2, 3, 4])).toEqual([2, 5, 6]);
    expect(statisticsIndex([1, 3, -2, 4, 5, -3, -2, 3, 4])).toEqual([2, 6]);
    expect(statisticsIndex([1, 3, -2, 4, 5, -3, -4, 3, 4])).toEqual([2]);
    expect(statisticsIndex([1, 3, -2, 4, 5, -3, -4, 3, -2])).toEqual([2, 8]);
  });
});
