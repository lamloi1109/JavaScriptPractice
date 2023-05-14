// Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)

import { sum, sumV2 } from './Ex5.js';

describe('sum(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sum({})).toBe(undefined);
    expect(sum(null)).toBe(undefined);
    expect(sum(undefined)).toBe(undefined);
    expect(sum('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(sum(0)).toBe(1 + 1);
  });
  it('should return sum', () => {
    expect(sum(2)).toBe(1 + 1 / 3 + 1 / 5);
  });
});

describe('sumV2(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(sumV2({})).toBe(undefined);
      expect(sumV2(null)).toBe(undefined);
      expect(sumV2(undefined)).toBe(undefined);
      expect(sumV2('')).toBe(undefined);
    });
    it('should return 0 if number is 0', () => {
      expect(sumV2(0)).toBe(1 + 1);
    });
    it('should return sumV2', () => {
      expect(sumV2(2)).toBe(1 + 1 / 3 + 1 / 5);
    });
  });
