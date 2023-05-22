// Bài 182: Cho mảng 1 chiều các số thực. Hãy viết hàm liệt kê tất cả các giá trị trong mảng có ít nhất 1 lận cận trái dấu với nó

import { statisticsNumber } from './Ex182.js';

// mảng ko có giá trị có lân cận trái dấu với nó: Toàn dương hoặc toàn âm

describe('statisticsNumber(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(statisticsNumber(null)).toBe(undefined);
    expect(statisticsNumber(undefined)).toBe(undefined);
    expect(statisticsNumber({})).toBe(undefined);
    expect(statisticsNumber('')).toBe(undefined);
    expect(statisticsNumber(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(statisticsNumber([])).toBe(undefined);
  });

  it('should return [] if arr is positive list', () => {
    expect(statisticsNumber([1, 3, 4, 5, 6])).toEqual([]);
  });

  it('should return [] if arr is negative list', () => {
    expect(statisticsNumber([-1, -3, -4, -5, -6])).toEqual([]);
  });

  it('should return correct list', () => {
    expect(statisticsNumber([1, -1, 1, -2, 3, 4, 5, 6])).toEqual([1, -1, 1, -2, 3]);
    expect(statisticsNumber([-1, 2, 2, -3, 4, -4, 4, 3, 1])).toEqual([-1, 2, 2, -3, 4, -4, 4]);
  });
});
