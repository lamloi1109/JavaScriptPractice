import { isPerfectNumber } from './Ex30.js';

describe('isPerfectNumber', () => {
  it('should return undefined if number is not a number', () => {
    expect(isPerfectNumber({})).toBe(undefined);
    expect(isPerfectNumber(null)).toBe(undefined);
    expect(isPerfectNumber(undefined)).toBe(undefined);
    expect(isPerfectNumber([])).toBe(undefined);
    expect(isPerfectNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(isPerfectNumber(0)).toBe(undefined);
    expect(isPerfectNumber(-1)).toBe(undefined);
    expect(isPerfectNumber(-2)).toBe(undefined);
    expect(isPerfectNumber(-3)).toBe(undefined);
  });

  it('should return max', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(5)).toBe(false);
  });
});
