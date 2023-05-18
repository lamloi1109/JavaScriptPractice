// Bài 26: Tính tích tất cả các “ước số lẻ” của số nguyên dương n

import { totalAllDivisorOddNumber, totalAllDivisorOddNumberV2 } from "./Ex26.js";

describe('totalAllDivisorOddNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalAllDivisorOddNumber({})).toBe(undefined);
    expect(totalAllDivisorOddNumber(null)).toBe(undefined);
    expect(totalAllDivisorOddNumber(undefined)).toBe(undefined);
    expect(totalAllDivisorOddNumber([])).toBe(undefined);
    expect(totalAllDivisorOddNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(totalAllDivisorOddNumber(0)).toEqual(0);
    expect(totalAllDivisorOddNumber(-1)).toEqual(0);
    expect(totalAllDivisorOddNumber(-2)).toEqual(0);
    expect(totalAllDivisorOddNumber(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(totalAllDivisorOddNumber(5)).toEqual(6);
    expect(totalAllDivisorOddNumber(10)).toEqual(6);
  });
});

describe('totalAllDivisorOddNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalAllDivisorOddNumberV2({})).toBe(undefined);
    expect(totalAllDivisorOddNumberV2(null)).toBe(undefined);
    expect(totalAllDivisorOddNumberV2(undefined)).toBe(undefined);
    expect(totalAllDivisorOddNumberV2([])).toBe(undefined);
    expect(totalAllDivisorOddNumberV2('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(totalAllDivisorOddNumberV2(0)).toEqual(0);
    expect(totalAllDivisorOddNumberV2(-1)).toEqual(0);
    expect(totalAllDivisorOddNumberV2(-2)).toEqual(0);
    expect(totalAllDivisorOddNumberV2(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(totalAllDivisorOddNumberV2(5)).toEqual(6);
    expect(totalAllDivisorOddNumberV2(10)).toEqual(6);
  });
});
