// Bài 190: Hãy liệt kê các giá trị có toàn chữ số lẻ trong mảng 1 chiều các số nguyên

import { statisticsAllOddNumber } from "./Ex190.js";

describe('statisticsAllOddNumber(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsAllOddNumber(null)).toBe(undefined);
    expect(statisticsAllOddNumber(undefined)).toBe(undefined);
    expect(statisticsAllOddNumber({})).toBe(undefined);
    expect(statisticsAllOddNumber('')).toBe(undefined);
    expect(statisticsAllOddNumber(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsAllOddNumber([])).toBe(undefined);
  });

  it('should return [] if list is even number list', () => {
    expect(statisticsAllOddNumber([2, 4, 6, 8])).toEqual([]);
  });

  it('should return correct list', () => {
    expect(statisticsAllOddNumber([123, 111, 357])).toEqual([111, 357]);
  });
});
