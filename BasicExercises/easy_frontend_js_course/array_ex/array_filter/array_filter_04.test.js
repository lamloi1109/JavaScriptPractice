// Dãy số nguyên tố nhỏ hơn n
// Viết hàm generatePrimeNumbers(n) để tạo ra mảng các số nguyên tố nhỏ hơn n (0 < n < 1000)

import { generatePrimeNumbers, generatePrimeNumbersV2 } from './array_filter_04.js';

describe('generatePrimeNumbers(n)', () => {
  it('should return [] if n is not a number', () => {
    expect(generatePrimeNumbers('dsa')).toStrictEqual([]);
  });
  it('should return [] if n <= 0', () => {
    expect(generatePrimeNumbers(-1)).toStrictEqual([]);
    expect(generatePrimeNumbers(0)).toStrictEqual([]);
  });
  it('should return correct list prime number', () => {
    expect(generatePrimeNumbers(10)).toStrictEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});


describe('generatePrimeNumbersV2(n)', () => {
    it('should return [] if n is not a number', () => {
      expect(generatePrimeNumbersV2('dsa')).toStrictEqual([]);
    });
    it('should return [] if n <= 0', () => {
      expect(generatePrimeNumbersV2(-1)).toStrictEqual([]);
      expect(generatePrimeNumbersV2(0)).toStrictEqual([]);
    });
    it('should return correct list prime number', () => {
      expect(generatePrimeNumbersV2(10)).toStrictEqual([2, 3, 5, 7]);
      expect(generatePrimeNumbersV2(20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  
  
