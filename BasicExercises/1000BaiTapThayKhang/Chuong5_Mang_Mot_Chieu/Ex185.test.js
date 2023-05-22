// Bài 185: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên

import { statisticsSquareNumberIndex } from './Ex185.js';

describe('statisticsSquareNumberIndex(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsSquareNumberIndex(null)).toBe(undefined);
    expect(statisticsSquareNumberIndex(undefined)).toBe(undefined);
    expect(statisticsSquareNumberIndex({})).toBe(undefined);
    expect(statisticsSquareNumberIndex('')).toBe(undefined);
    expect(statisticsSquareNumberIndex(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsSquareNumberIndex([])).toBe(undefined);
  });
  it('should return [] if arr does not have Square number', () => {
    expect(statisticsSquareNumberIndex([5, 7, 10, 12])).toEqual([]);
  });

  it('should return list Square number index', () => {
    expect(statisticsSquareNumberIndex([1, 4, 9, 16, 25, 30])).toEqual([0, 1, 2, 3, 4]);
  });
});
