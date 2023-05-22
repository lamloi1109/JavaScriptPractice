// Bài 191: Hãy liệt kê các giá trị cực đại trong mảng 1 chiều các số thực. Một phần tử được gọi là cực đại khi lớn hơn các phần tử lân cận

import { statisticsMaximumNumberInList } from "./Ex191.js";

describe('statisticsMaximumNumberInList(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsMaximumNumberInList(null)).toBe(undefined);
    expect(statisticsMaximumNumberInList(undefined)).toBe(undefined);
    expect(statisticsMaximumNumberInList({})).toBe(undefined);
    expect(statisticsMaximumNumberInList('')).toBe(undefined);
    expect(statisticsMaximumNumberInList(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsMaximumNumberInList([])).toBe(undefined);
  });

  // Chúng sinh bình đẳng :>

  it('should return [] if list does not have maximum value', () => {
    expect(statisticsMaximumNumberInList([1, 1, 1, 1, 1, 1, 1, 1])).toEqual([]);
  });

  it('should return maximum list', () => {
    expect(statisticsMaximumNumberInList([1, 3, 2, 4, 1, 2, 0])).toEqual([3, 4, 2]);
    expect(statisticsMaximumNumberInList([3, 1, 2, 0, 1, 0])).toEqual([3, 2, 1]);
    expect(statisticsMaximumNumberInList([1, 3, 0, 1, 0, 1, 2])).toEqual([3, 1, 2]);
  });
});
