// Tìm các mảng con có chứa số dương chẳn liên tiếp
// Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
// chẳn

import { findAllPositiveEvenSubArr } from './array_subarr_04.js';

describe('findAllPositiveEvenSubArr(numberList)', () => {
  it('should return [] if list is not an array', () => {
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr(null)).toEqual([]);
    expect(findAllPositiveEvenSubArr(undefined)).toEqual([]);
    expect(findAllPositiveEvenSubArr('')).toEqual([]);
    expect(findAllPositiveEvenSubArr(123)).toEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
  });

  it('should return [] if list is negative number', () => {
    expect(findAllPositiveEvenSubArr([-1, -2, -3, -4])).toEqual([[]]);
  });

  it('should return [] if list is positive odd number', () => {
    expect(findAllPositiveEvenSubArr([1, 3, 5, 7])).toEqual([[]]);
  });

  it('should return correct list', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);
  });
});
