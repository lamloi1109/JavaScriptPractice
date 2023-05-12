// Tổng của các chữ số trong mảng
// Viết hàm sumAllDigits(numberList) để tính tổng các chữ số của từng số trong mảng numberList

import { sumAllDigits, sumAllDigitsV2 } from './array_sum_02.js';

describe('sumAllDigits(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(sumAllDigits(null)).toBe(0);
    expect(sumAllDigits(undefined)).toBe(0);
    expect(sumAllDigits('')).toBe(0);
    expect(sumAllDigits({})).toBe(0);
    expect(sumAllDigits(123)).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(sumAllDigits([])).toBe(0);
  });

  it('should return first number if list length is 1', () => {
    expect(sumAllDigits([4])).toBe(4);
  });

  it('should return correct sum', () => {
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([111, 1])).toBe(4);
  });
});


describe('sumAllDigitsV2(numberList)', () => {
    it('should return 0 if list is not an array', () => {
      expect(sumAllDigitsV2(null)).toBe(0);
      expect(sumAllDigitsV2(undefined)).toBe(0);
      expect(sumAllDigitsV2('')).toBe(0);
      expect(sumAllDigitsV2({})).toBe(0);
      expect(sumAllDigitsV2(123)).toBe(0);
    });
    it('should return 0 if list is empty array', () => {
      expect(sumAllDigitsV2([])).toBe(0);
    });
  
    it('should return first number if list length is 1', () => {
      expect(sumAllDigitsV2([4])).toBe(4);
    });
  
    it('should return correct sum', () => {
      expect(sumAllDigitsV2([123, 4])).toBe(10);
      expect(sumAllDigitsV2([111, 1])).toBe(4);
    });
  });