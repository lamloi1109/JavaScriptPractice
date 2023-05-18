// Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n

import { countDivisorEvenNumber, countDivisorEvenNumberV2 } from "./Ex27.js";

describe('countDivisorEvenNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(countDivisorEvenNumber({})).toBe(undefined);
    expect(countDivisorEvenNumber(null)).toBe(undefined);
    expect(countDivisorEvenNumber(undefined)).toBe(undefined);
    expect(countDivisorEvenNumber([])).toBe(undefined);
    expect(countDivisorEvenNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(countDivisorEvenNumber(0)).toBe(0);
    expect(countDivisorEvenNumber(-1)).toBe(0);
    expect(countDivisorEvenNumber(-2)).toBe(0);
    expect(countDivisorEvenNumber(-3)).toBe(0);
  });

  it('should return sum devisor of number', () => {
    expect(countDivisorEvenNumber(5)).toBe(0);
    expect(countDivisorEvenNumber(10)).toBe(2);
  });
});

describe('countDivisorEvenNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(countDivisorEvenNumberV2({})).toBe(undefined);
    expect(countDivisorEvenNumberV2(null)).toBe(undefined);
    expect(countDivisorEvenNumberV2(undefined)).toBe(undefined);
    expect(countDivisorEvenNumberV2([])).toBe(undefined);
    expect(countDivisorEvenNumberV2('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(countDivisorEvenNumberV2(0)).toBe(0);
    expect(countDivisorEvenNumberV2(-1)).toBe(0);
    expect(countDivisorEvenNumberV2(-2)).toBe(0);
    expect(countDivisorEvenNumberV2(-3)).toBe(0);
  });

  it('should return sum devisor of number', () => {
    expect(countDivisorEvenNumberV2(5)).toBe(0);
    expect(countDivisorEvenNumberV2(10)).toBe(2);
  });
});
