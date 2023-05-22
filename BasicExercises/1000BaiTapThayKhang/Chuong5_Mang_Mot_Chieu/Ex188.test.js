// Bài 188: Hãy liệt kê các vị trí chẵn lớn nhất trong mảng 1 chiều các số nguyên

import { statisticsHighestEvenNumber } from './Ex188.js';

describe('statisticsHighestEvenNumber(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsHighestEvenNumber(null)).toBe(undefined);
    expect(statisticsHighestEvenNumber(undefined)).toBe(undefined);
    expect(statisticsHighestEvenNumber({})).toBe(undefined);
    expect(statisticsHighestEvenNumber('')).toBe(undefined);
    expect(statisticsHighestEvenNumber(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsHighestEvenNumber([])).toBe(undefined);
  });

  it('should return [] if list is Odd', () => {
    expect(statisticsHighestEvenNumber([1, 3, 5, 7])).toEqual([]);
  });

  it('should return [] if list is Negative Odd ', () => {
    expect(statisticsHighestEvenNumber([-1, -3, -5, -7])).toEqual([]);
  });

  it('should return [] if list is Negative Odd ', () => {
    expect(statisticsHighestEvenNumber([1, 2, 3, 1, 3])).toEqual([1]);
    expect(statisticsHighestEvenNumber([6, 1, 2, 3, 4, 6])).toEqual([0, 5]);
  });
});
