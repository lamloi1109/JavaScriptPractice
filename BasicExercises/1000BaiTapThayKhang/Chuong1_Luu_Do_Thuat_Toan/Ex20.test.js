// Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n

import {
  statisticsDivisorOfNumber,
  statisticsDivisorOfNumberV2,
  statisticsDivisorOfNumberV3,
  statisticsDivisorOfNumberV4,
  statisticsDivisorOfNumberV5,
} from './Ex20.js';

describe('statisticsDivisorOfNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(statisticsDivisorOfNumber({})).toBe(undefined);
    expect(statisticsDivisorOfNumber(null)).toBe(undefined);
    expect(statisticsDivisorOfNumber(undefined)).toBe(undefined);
    expect(statisticsDivisorOfNumber([])).toBe(undefined);
    expect(statisticsDivisorOfNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(statisticsDivisorOfNumber(0)).toEqual([]);
    expect(statisticsDivisorOfNumber(-1)).toEqual([]);
    expect(statisticsDivisorOfNumber(-2)).toEqual([]);
    expect(statisticsDivisorOfNumber(-3)).toEqual([]);
  });

  it('should return list devisor of number', () => {
    expect(statisticsDivisorOfNumber(5)).toEqual([1, 5]);
    expect(statisticsDivisorOfNumber(10)).toEqual([1, 2, 5, 10]);
  });
});

describe('statisticsDivisorOfNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(statisticsDivisorOfNumberV2({})).toBe(undefined);
    expect(statisticsDivisorOfNumberV2(null)).toBe(undefined);
    expect(statisticsDivisorOfNumberV2(undefined)).toBe(undefined);
    expect(statisticsDivisorOfNumberV2([])).toBe(undefined);
    expect(statisticsDivisorOfNumberV2('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(statisticsDivisorOfNumberV2(0)).toEqual([]);
    expect(statisticsDivisorOfNumberV2(-1)).toEqual([]);
    expect(statisticsDivisorOfNumberV2(-2)).toEqual([]);
    expect(statisticsDivisorOfNumberV2(-3)).toEqual([]);
  });

  it('should return list devisor of number', () => {
    expect(statisticsDivisorOfNumberV2(5)).toEqual([1, 5]);
    expect(statisticsDivisorOfNumberV2(10)).toEqual([1, 2, 5, 10]);
  });
});

describe('statisticsDivisorOfNumberV3(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(statisticsDivisorOfNumberV3({})).toBe(undefined);
    expect(statisticsDivisorOfNumberV3(null)).toBe(undefined);
    expect(statisticsDivisorOfNumberV3(undefined)).toBe(undefined);
    expect(statisticsDivisorOfNumberV3([])).toBe(undefined);
    expect(statisticsDivisorOfNumberV3('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(statisticsDivisorOfNumberV3(0)).toEqual([]);
    expect(statisticsDivisorOfNumberV3(-1)).toEqual([]);
    expect(statisticsDivisorOfNumberV3(-2)).toEqual([]);
    expect(statisticsDivisorOfNumberV3(-3)).toEqual([]);
  });

  it('should return list devisor of number', () => {
    expect(statisticsDivisorOfNumberV3(5)).toEqual([1, 5]);
    expect(statisticsDivisorOfNumberV3(10)).toEqual([1, 2, 5, 10]);
  });
});
describe('statisticsDivisorOfNumberV4(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(statisticsDivisorOfNumberV4({})).toBe(undefined);
    expect(statisticsDivisorOfNumberV4(null)).toBe(undefined);
    expect(statisticsDivisorOfNumberV4(undefined)).toBe(undefined);
    expect(statisticsDivisorOfNumberV4([])).toBe(undefined);
    expect(statisticsDivisorOfNumberV4('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(statisticsDivisorOfNumberV4(0)).toEqual([]);
    expect(statisticsDivisorOfNumberV4(-1)).toEqual([]);
    expect(statisticsDivisorOfNumberV4(-2)).toEqual([]);
    expect(statisticsDivisorOfNumberV4(-3)).toEqual([]);
  });

  it('should return list devisor of number', () => {
    expect(statisticsDivisorOfNumberV4(5)).toEqual([1, 5]);
    expect(statisticsDivisorOfNumberV4(10)).toEqual([1, 2, 5, 10]);
  });
});

describe('statisticsDivisorOfNumberV5(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(statisticsDivisorOfNumberV5({})).toBe(undefined);
      expect(statisticsDivisorOfNumberV5(null)).toBe(undefined);
      expect(statisticsDivisorOfNumberV5(undefined)).toBe(undefined);
      expect(statisticsDivisorOfNumberV5([])).toBe(undefined);
      expect(statisticsDivisorOfNumberV5('')).toBe(undefined);
    });
  
    it('should return 0 if number <= 0', () => {
      expect(statisticsDivisorOfNumberV5(0)).toEqual([]);
      expect(statisticsDivisorOfNumberV5(-1)).toEqual([]);
      expect(statisticsDivisorOfNumberV5(-2)).toEqual([]);
      expect(statisticsDivisorOfNumberV5(-3)).toEqual([]);
    });
  
    it('should return list devisor of number', () => {
      expect(statisticsDivisorOfNumberV5(5)).toEqual([1, 5]);
      expect(statisticsDivisorOfNumberV5(10)).toEqual([1, 2, 5, 10]);
    });
  });
  