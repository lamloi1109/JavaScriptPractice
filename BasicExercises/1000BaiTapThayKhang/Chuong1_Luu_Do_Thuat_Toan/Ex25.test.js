// Bài 25: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n

import { totalAllDivisorEvenNumber, totalAllDivisorEvenNumberV2 } from './Ex25.js';

describe('totalAllDivisorEvenNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalAllDivisorEvenNumber({})).toBe(undefined);
    expect(totalAllDivisorEvenNumber(null)).toBe(undefined);
    expect(totalAllDivisorEvenNumber(undefined)).toBe(undefined);
    expect(totalAllDivisorEvenNumber([])).toBe(undefined);
    expect(totalAllDivisorEvenNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(totalAllDivisorEvenNumber(0)).toEqual(0);
    expect(totalAllDivisorEvenNumber(-1)).toEqual(0);
    expect(totalAllDivisorEvenNumber(-2)).toEqual(0);
    expect(totalAllDivisorEvenNumber(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(totalAllDivisorEvenNumber(5)).toEqual(0);
    expect(totalAllDivisorEvenNumber(10)).toEqual(12);
  });
});

describe('totalAllDivisorEvenNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalAllDivisorEvenNumberV2({})).toBe(undefined);
    expect(totalAllDivisorEvenNumberV2(null)).toBe(undefined);
    expect(totalAllDivisorEvenNumberV2(undefined)).toBe(undefined);
    expect(totalAllDivisorEvenNumberV2([])).toBe(undefined);
    expect(totalAllDivisorEvenNumberV2('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(totalAllDivisorEvenNumberV2(0)).toEqual(0);
    expect(totalAllDivisorEvenNumberV2(-1)).toEqual(0);
    expect(totalAllDivisorEvenNumberV2(-2)).toEqual(0);
    expect(totalAllDivisorEvenNumberV2(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(totalAllDivisorEvenNumberV2(5)).toEqual(0);
    expect(totalAllDivisorEvenNumberV2(10)).toEqual(12);
  });
});
