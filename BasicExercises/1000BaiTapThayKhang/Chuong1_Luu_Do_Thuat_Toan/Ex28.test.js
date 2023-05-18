// Bài 28: Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó

import { countDivisorLessThanNumber } from './Ex28.js';

describe('countDivisorLessThanNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(countDivisorLessThanNumber({})).toBe(undefined);
    expect(countDivisorLessThanNumber(null)).toBe(undefined);
    expect(countDivisorLessThanNumber(undefined)).toBe(undefined);
    expect(countDivisorLessThanNumber([])).toBe(undefined);
    expect(countDivisorLessThanNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(countDivisorLessThanNumber(0)).toBe(0);
    expect(countDivisorLessThanNumber(-1)).toBe(0);
    expect(countDivisorLessThanNumber(-2)).toBe(0);
    expect(countDivisorLessThanNumber(-3)).toBe(0);
  });

  it('should return sum devisor of number', () => {
    expect(countDivisorLessThanNumber(5)).toBe(1);
    expect(countDivisorLessThanNumber(10)).toBe(3);
  });
});
