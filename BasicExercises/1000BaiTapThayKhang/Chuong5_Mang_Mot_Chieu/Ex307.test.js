// Bài 307: Tạo mảng b chỉ chứa giá trị lẻ từ mảng a

import { generateOddArray, generateOddArrayV2 } from './Ex307.js';

describe('generateOddArray(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(generateOddArray(null)).toBe(undefined);
    expect(generateOddArray(undefined)).toBe(undefined);
    expect(generateOddArray({})).toBe(undefined);
    expect(generateOddArray('')).toBe(undefined);
    expect(generateOddArray(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(generateOddArray([])).toBe(undefined);
  });

  it('should return [] if arr does not have odd number', () => {
    expect(generateOddArray([2, 4, 6, 8])).toEqual([]);
  });

  it('should return odd list from array A', () => {
    expect(generateOddArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9]);
  });
});


describe('generateOddArrayV2(arr)', () => {
    it('should return undefined if arr is not an array', () => {
      expect(generateOddArrayV2(null)).toBe(undefined);
      expect(generateOddArrayV2(undefined)).toBe(undefined);
      expect(generateOddArrayV2({})).toBe(undefined);
      expect(generateOddArrayV2('')).toBe(undefined);
      expect(generateOddArrayV2(123)).toBe(undefined);
    });
  
    it('should return undefined if arr is empty array', () => {
      expect(generateOddArrayV2([])).toBe(undefined);
    });
  
    it('should return [] if arr does not have odd number', () => {
      expect(generateOddArrayV2([2, 4, 6, 8])).toEqual([]);
    });
  
    it('should return odd list from array A', () => {
      expect(generateOddArrayV2([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9]);
    });
  });
  