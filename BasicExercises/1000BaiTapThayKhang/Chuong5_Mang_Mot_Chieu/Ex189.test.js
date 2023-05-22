// Bài 189: Hãy liệt kê các giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là chữ số lẻ

import { statisticsFirstOddNumber } from './Ex189.js';

describe('statisticsFirstOddNumber(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsFirstOddNumber(null)).toBe(undefined);
    expect(statisticsFirstOddNumber(undefined)).toBe(undefined);
    expect(statisticsFirstOddNumber({})).toBe(undefined);
    expect(statisticsFirstOddNumber('')).toBe(undefined);
    expect(statisticsFirstOddNumber(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsFirstOddNumber([])).toBe(undefined);
  });

  it('should return [] if list does not have odd number and first number in item is not odd', () => {
    expect(statisticsFirstOddNumber([2, 4, 6, 8, 22, 44, 66])).toEqual([]);
  });

  it('should return correct list', () => {
    expect(statisticsFirstOddNumber([1, 2, 3, 5, 11, 12, 21, 22])).toEqual([0, 2, 3, 4, 5]);
    expect(statisticsFirstOddNumber([-1, 2, -3, -5, -11, -12, 21, 22])).toEqual([0, 2, 3, 4, 5]);
  });
});
