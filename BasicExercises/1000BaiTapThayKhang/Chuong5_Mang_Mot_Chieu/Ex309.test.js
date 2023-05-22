// Bài 309: Tạo mảng b sao cho b[i] = tổng các phần tử lân cận với a[i] trong mảng a

import { generateSumList } from './Ex309.js';

describe('generateSumList(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(generateSumList(null)).toBe(undefined);
    expect(generateSumList(undefined)).toBe(undefined);
    expect(generateSumList({})).toBe(undefined);
    expect(generateSumList('')).toBe(undefined);
    expect(generateSumList(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(generateSumList([])).toBe(undefined);
  });

  it('should return sum list', () => {
    expect(generateSumList([1, 2, 1, 1, 2, 1])).toEqual([4, 4, 4, 4]);
  });
});
