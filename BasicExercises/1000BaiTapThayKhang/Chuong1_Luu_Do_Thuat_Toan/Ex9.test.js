// Bài 9: Tính T(n) = 1 x 2 x 3…x N

import { factorial, factorialV2, factorialV3 } from './Ex9.js';

describe('factorial(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(factorial({})).toBe(undefined);
    expect(factorial(null)).toBe(undefined);
    expect(factorial(undefined)).toBe(undefined);
    expect(factorial('')).toBe(undefined);
    expect(factorial([])).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(factorial(0)).toBe(0);
  });

  it('should return factorial number', () => {
    expect(factorial(5)).toBe(120);
  });
});

describe('factorialV2(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(factorialV2({})).toBe(undefined);
      expect(factorialV2(null)).toBe(undefined);
      expect(factorialV2(undefined)).toBe(undefined);
      expect(factorialV2('')).toBe(undefined);
      expect(factorialV2([])).toBe(undefined);
    });
    it('should return 0 if number is 0', () => {
      expect(factorialV2(0)).toBe(0);
    });
  
    it('should return factorialV2 number', () => {
      expect(factorialV2(5)).toBe(120);
    });
  });
  
  describe('factorialV3(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(factorialV3({})).toBe(undefined);
      expect(factorialV3(null)).toBe(undefined);
      expect(factorialV3(undefined)).toBe(undefined);
      expect(factorialV3('')).toBe(undefined);
      expect(factorialV3([])).toBe(undefined);
    });
    it('should return 0 if number is 0', () => {
      expect(factorialV3(0)).toBe(0);
    });
  
    it('should return factorialV3 number', () => {
      expect(factorialV3(5)).toBe(120);
    });
  });