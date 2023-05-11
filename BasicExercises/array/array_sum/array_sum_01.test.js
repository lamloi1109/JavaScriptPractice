// Tổng các số chẳn mà nó lớn hơn số trước đó.
// Viết hàm sumEvenNumbers(numberList) để tính tổng các số chẵn có giá trị lớn hơn số liền kế trước đó.

import { sumEvenNumbers } from './array_sum_01.js';

describe('sumEvenNumbers(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(sumEvenNumbers(null)).toBe(0);
    expect(sumEvenNumbers(undefined)).toBe(0);
    expect(sumEvenNumbers('')).toBe(0);
    expect(sumEvenNumbers(123)).toBe(0);
    expect(sumEvenNumbers({})).toBe(0);
  });

  it('should return 0 if list is empty array', () => {
    expect(sumEvenNumbers([])).toBe(0);
  });

  it('should return 0 if list is odd number array', () => {
    expect(sumEvenNumbers([3, 5, 7, 9])).toBe(0);
  });

  it('should return correct sum', () => {
    // expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(6); ???
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(10);
  });
});
