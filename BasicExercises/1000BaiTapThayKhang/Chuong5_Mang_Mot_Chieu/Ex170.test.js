// Bài 170: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số nguyên tố nhỏ nhất lớn hơn mọi giá trị có trong mảng

import { findLowestPrimeNumberByCondition } from './Ex170.js';

describe('findLowestPrimeNumberByCondition(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(findLowestPrimeNumberByCondition(null)).toBe(undefined);
    expect(findLowestPrimeNumberByCondition(undefined)).toBe(undefined);
    expect(findLowestPrimeNumberByCondition({})).toBe(undefined);
    expect(findLowestPrimeNumberByCondition('')).toBe(undefined);
    expect(findLowestPrimeNumberByCondition(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(findLowestPrimeNumberByCondition([])).toBe(undefined);
  });

  it('should return correct number', () => {
    expect(findLowestPrimeNumberByCondition([1, 2, 3, 4, 5, 6, 7, 9])).toBe(11);

    expect(findLowestPrimeNumberByCondition([1, 2, 3, 4, 5, 6, 7, 8, 11])).toBe(13);
  });
});
