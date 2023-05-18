// Bài 24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n

import { statisticsDivisorOddNumber, statisticsDivisorOddNumberV2 } from "./Ex24.js";

describe('statisticsDivisorOddNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(statisticsDivisorOddNumber({})).toBe(undefined);
    expect(statisticsDivisorOddNumber(null)).toBe(undefined);
    expect(statisticsDivisorOddNumber(undefined)).toBe(undefined);
    expect(statisticsDivisorOddNumber([])).toBe(undefined);
    expect(statisticsDivisorOddNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(statisticsDivisorOddNumber(0)).toEqual([]);
    expect(statisticsDivisorOddNumber(-1)).toEqual([]);
    expect(statisticsDivisorOddNumber(-2)).toEqual([]);
    expect(statisticsDivisorOddNumber(-3)).toEqual([]);
  });

  it('should return sum devisor of number', () => {
    expect(statisticsDivisorOddNumber(5)).toEqual([1, 5]);
    expect(statisticsDivisorOddNumber(10)).toEqual([1, 5]);
  });
});


describe('statisticsDivisorOddNumberV2(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(statisticsDivisorOddNumberV2({})).toBe(undefined);
      expect(statisticsDivisorOddNumberV2(null)).toBe(undefined);
      expect(statisticsDivisorOddNumberV2(undefined)).toBe(undefined);
      expect(statisticsDivisorOddNumberV2([])).toBe(undefined);
      expect(statisticsDivisorOddNumberV2('')).toBe(undefined);
    });
  
    it('should return 0 if number <= 0', () => {
      expect(statisticsDivisorOddNumberV2(0)).toEqual([]);
      expect(statisticsDivisorOddNumberV2(-1)).toEqual([]);
      expect(statisticsDivisorOddNumberV2(-2)).toEqual([]);
      expect(statisticsDivisorOddNumberV2(-3)).toEqual([]);
    });
  
    it('should return sum devisor of number', () => {
      expect(statisticsDivisorOddNumberV2(5)).toEqual([1, 5]);
      expect(statisticsDivisorOddNumberV2(10)).toEqual([1, 5]);
    });
  });
  