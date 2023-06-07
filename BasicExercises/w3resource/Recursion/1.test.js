// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

import { calculateFactorial } from "./1.js";

describe('calculateFactorial(number)', () => {
  it('should return undefined if number < 0 || number is not a number', () => {
    expect(calculateFactorial(-1)).toBe(undefined);
    expect(calculateFactorial(-2)).toBe(undefined);
    expect(calculateFactorial(null)).toBe(undefined);
    expect(calculateFactorial(undefined)).toBe(undefined);
    expect(calculateFactorial({})).toBe(undefined);
    expect(calculateFactorial([])).toBe(undefined);
    expect(calculateFactorial("123")).toBe(undefined);
  });
  it('should return 0 if number <= 0', () => {
    expect(calculateFactorial(0)).toBe(0);
  });
  it('should return 1 if number === 1', () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  it('should return factorial number', () => {
    expect(calculateFactorial(5)).toBe(1 * 2 * 3 * 4 * 5);
    expect(calculateFactorial(4)).toBe(1 * 2 * 3 * 4);
    expect(calculateFactorial(3)).toBe(1 * 2 * 3);
  });
});
