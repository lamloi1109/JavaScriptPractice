// Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n

import { calcMultipleDivisorOfNumber, calcMultipleDivisorOfNumberV2 } from "./Ex22.js";

describe('calcMultipleDivisorOfNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(calcMultipleDivisorOfNumber({})).toBe(undefined);
    expect(calcMultipleDivisorOfNumber(null)).toBe(undefined);
    expect(calcMultipleDivisorOfNumber(undefined)).toBe(undefined);
    expect(calcMultipleDivisorOfNumber([])).toBe(undefined);
    expect(calcMultipleDivisorOfNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(calcMultipleDivisorOfNumber(0)).toBe(0);
    expect(calcMultipleDivisorOfNumber(-1)).toBe(0);
    expect(calcMultipleDivisorOfNumber(-2)).toBe(0);
    expect(calcMultipleDivisorOfNumber(-3)).toBe(0);
  });

  it('should return sum devisor of number', () => {
    expect(calcMultipleDivisorOfNumber(5)).toBe(5);
    expect(calcMultipleDivisorOfNumber(10)).toBe(1 * 2 * 5 * 10);
  });
});



describe('calcMultipleDivisorOfNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(calcMultipleDivisorOfNumberV2({})).toBe(undefined);
    expect(calcMultipleDivisorOfNumberV2(null)).toBe(undefined);
    expect(calcMultipleDivisorOfNumberV2(undefined)).toBe(undefined);
    expect(calcMultipleDivisorOfNumberV2([])).toBe(undefined);
    expect(calcMultipleDivisorOfNumberV2('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(calcMultipleDivisorOfNumberV2(0)).toBe(0);
    expect(calcMultipleDivisorOfNumberV2(-1)).toBe(0);
    expect(calcMultipleDivisorOfNumberV2(-2)).toBe(0);
    expect(calcMultipleDivisorOfNumberV2(-3)).toBe(0);
  });

  it('should return sum devisor of number', () => {
    expect(calcMultipleDivisorOfNumberV2(5)).toBe(5);
    expect(calcMultipleDivisorOfNumberV2(10)).toBe(1 * 2 * 5 * 10);
  });
});
