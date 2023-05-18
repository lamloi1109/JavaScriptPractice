// Bài 23: Đếm số lượng “ước số” của số nguyên dương n

import { countDivisorNumber, countDivisorNumberV2 } from "./Ex23.js";

describe('countDivisorNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(countDivisorNumber({})).toBe(undefined);
    expect(countDivisorNumber(null)).toBe(undefined);
    expect(countDivisorNumber(undefined)).toBe(undefined);
    expect(countDivisorNumber([])).toBe(undefined);
    expect(countDivisorNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(countDivisorNumber(0)).toBe(0);
    expect(countDivisorNumber(-1)).toBe(0);
    expect(countDivisorNumber(-2)).toBe(0);
    expect(countDivisorNumber(-3)).toBe(0);
  });

  it('should return sum devisor of number', () => {
    expect(countDivisorNumber(5)).toBe(2);
    expect(countDivisorNumber(10)).toBe(4);
  });
});

describe('countDivisorNumberV2(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(countDivisorNumberV2({})).toBe(undefined);
      expect(countDivisorNumberV2(null)).toBe(undefined);
      expect(countDivisorNumberV2(undefined)).toBe(undefined);
      expect(countDivisorNumberV2([])).toBe(undefined);
      expect(countDivisorNumberV2('')).toBe(undefined);
    });
  
    it('should return 0 if number <= 0', () => {
      expect(countDivisorNumberV2(0)).toBe(0);
      expect(countDivisorNumberV2(-1)).toBe(0);
      expect(countDivisorNumberV2(-2)).toBe(0);
      expect(countDivisorNumberV2(-3)).toBe(0);
    });
  
    it('should return sum devisor of number', () => {
      expect(countDivisorNumberV2(5)).toBe(2);
      expect(countDivisorNumberV2(10)).toBe(4);
    });
  });
  
