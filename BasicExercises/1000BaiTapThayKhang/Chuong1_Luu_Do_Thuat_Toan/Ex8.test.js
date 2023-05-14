// Bài 8: Tính S(n) = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
import { sum, sumV2 } from './Ex8.js';

describe('sum(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sum({})).toBe(undefined);
    expect(sum(null)).toBe(undefined);
    expect(sum(undefined)).toBe(undefined);
    expect(sum('')).toBe(undefined);
  });

  it('should return sum', () => {
    expect(sum(3)).toBe(1 / 2 + 3 / 4 + 5 / 6);
  });
});

describe('sumV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sumV2({})).toBe(undefined);
    expect(sumV2(null)).toBe(undefined);
    expect(sumV2(undefined)).toBe(undefined);
    expect(sumV2('')).toBe(undefined);
  });

  it('should return sumV2', () => {
    expect(sumV2(3)).toBe(1 / 2 + 3 / 4 + 5 / 6);
  });
});
