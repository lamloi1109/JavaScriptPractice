// Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n

import { sum, sumV2 } from './Ex4.js';

describe('sum(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sum({})).toBe(undefined);
    expect(sum(null)).toBe(undefined);
    expect(sum(undefined)).toBe(undefined);
    expect(sum('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(sum(0)).toBe(1 / 2);
  });
  it('should return sum', () => {
    expect(sum(3)).toBe(1 / 2 + 1 / 4 + 1 / 6);
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
    expect(sumV2(0)).toBe(1 / 2);
  });
  it('should return sumV2', () => {
    expect(sumV2(3)).toBe(1 / 2 + 1 / 4 + 1 / 6);
  });
});
