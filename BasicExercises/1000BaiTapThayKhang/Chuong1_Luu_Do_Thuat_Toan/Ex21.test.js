import { totalDivisorOfNumber, totalDivisorOfNumberV2, totalDivisorOfNumberV3, totalDivisorOfNumberV4 } from './Ex21.js';

// Bài 21: Tính tổng tất cả các “ ước số” của số nguyên dương n
describe('totalDivisorOfNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalDivisorOfNumber({})).toBe(undefined);
    expect(totalDivisorOfNumber(null)).toBe(undefined);
    expect(totalDivisorOfNumber(undefined)).toBe(undefined);
    expect(totalDivisorOfNumber([])).toBe(undefined);
    expect(totalDivisorOfNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(totalDivisorOfNumber(0)).toEqual(0);
    expect(totalDivisorOfNumber(-1)).toEqual(0);
    expect(totalDivisorOfNumber(-2)).toEqual(0);
    expect(totalDivisorOfNumber(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(totalDivisorOfNumber(5)).toEqual(6);
    expect(totalDivisorOfNumber(10)).toEqual(18);
  });
});

describe('totalDivisorOfNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalDivisorOfNumberV2({})).toBe(undefined);
    expect(totalDivisorOfNumberV2(null)).toBe(undefined);
    expect(totalDivisorOfNumberV2(undefined)).toBe(undefined);
    expect(totalDivisorOfNumberV2([])).toBe(undefined);
    expect(totalDivisorOfNumberV2('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(totalDivisorOfNumberV2(0)).toEqual(0);
    expect(totalDivisorOfNumberV2(-1)).toEqual(0);
    expect(totalDivisorOfNumberV2(-2)).toEqual(0);
    expect(totalDivisorOfNumberV2(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(totalDivisorOfNumberV2(5)).toEqual(6);
    expect(totalDivisorOfNumberV2(10)).toEqual(18);
  });
});


describe('totalDivisorOfNumberV3(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(totalDivisorOfNumberV3({})).toBe(undefined);
      expect(totalDivisorOfNumberV3(null)).toBe(undefined);
      expect(totalDivisorOfNumberV3(undefined)).toBe(undefined);
      expect(totalDivisorOfNumberV3([])).toBe(undefined);
      expect(totalDivisorOfNumberV3('')).toBe(undefined);
    });
  
    it('should return 0 if number <= 0', () => {
      expect(totalDivisorOfNumberV3(0)).toEqual(0);
      expect(totalDivisorOfNumberV3(-1)).toEqual(0);
      expect(totalDivisorOfNumberV3(-2)).toEqual(0);
      expect(totalDivisorOfNumberV3(-3)).toEqual(0);
    });
  
    it('should return sum devisor of number', () => {
      expect(totalDivisorOfNumberV3(5)).toEqual(6);
      expect(totalDivisorOfNumberV3(10)).toEqual(18);
    });
  });
  

  describe('totalDivisorOfNumberV4(number)', () => {
    it('should return undefined if number is not a number', () => {
      expect(totalDivisorOfNumberV4({})).toBe(undefined);
      expect(totalDivisorOfNumberV4(null)).toBe(undefined);
      expect(totalDivisorOfNumberV4(undefined)).toBe(undefined);
      expect(totalDivisorOfNumberV4([])).toBe(undefined);
      expect(totalDivisorOfNumberV4('')).toBe(undefined);
    });
  
    it('should return 0 if number <= 0', () => {
      expect(totalDivisorOfNumberV4(0)).toEqual(0);
      expect(totalDivisorOfNumberV4(-1)).toEqual(0);
      expect(totalDivisorOfNumberV4(-2)).toEqual(0);
      expect(totalDivisorOfNumberV4(-3)).toEqual(0);
    });
  
    it('should return sum devisor of number', () => {
      expect(totalDivisorOfNumberV4(5)).toEqual(6);
      expect(totalDivisorOfNumberV4(10)).toEqual(18);
    });
  });
  