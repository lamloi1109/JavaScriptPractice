// Bài 184: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên

import { statisticsPrimeNumberIndex } from './Ex184.js';

describe('statisticsPrimeNumberIndex(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsPrimeNumberIndex(null)).toBe(undefined);
    expect(statisticsPrimeNumberIndex(undefined)).toBe(undefined);
    expect(statisticsPrimeNumberIndex({})).toBe(undefined);
    expect(statisticsPrimeNumberIndex('')).toBe(undefined);
    expect(statisticsPrimeNumberIndex(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsPrimeNumberIndex([])).toBe(undefined);
  });
  it('should return [] if arr does not have prime number', () => {
    expect(statisticsPrimeNumberIndex([4, 6, 8])).toEqual([]);
  });

  it('should return list prime number index', () => {
    expect(statisticsPrimeNumberIndex([2, 3, 4, 6, 7, 8, 11, 13])).toEqual([0, 1, 4, 6, 7]);
  });
});
