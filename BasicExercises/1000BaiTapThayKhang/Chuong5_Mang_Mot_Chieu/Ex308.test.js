// Bài 308: Tạo mảng b chỉ chứa giá trị âm từ mảng a

import { generateNegativeList, generateNegativeListV2 } from "./Ex308.js";

describe('generateNegativeList(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(generateNegativeList(null)).toBe(undefined);
    expect(generateNegativeList(undefined)).toBe(undefined);
    expect(generateNegativeList({})).toBe(undefined);
    expect(generateNegativeList('')).toBe(undefined);
    expect(generateNegativeList(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(generateNegativeList([])).toBe(undefined);
  });

  it('should return [] if arr does not have negative number', () => {
    expect(generateNegativeList([2, 4, 6, 8])).toEqual([]);
  });

  it('should return odd list from array A', () => {
    expect(generateNegativeList([-1, 2, -3, 4, -5, 6, -7, 8, -9])).toEqual([-1, -3, -5, -7, -9]);
  });
});

describe('generateNegativeListV2(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(generateNegativeListV2(null)).toBe(undefined);
    expect(generateNegativeListV2(undefined)).toBe(undefined);
    expect(generateNegativeListV2({})).toBe(undefined);
    expect(generateNegativeListV2('')).toBe(undefined);
    expect(generateNegativeListV2(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(generateNegativeListV2([])).toBe(undefined);
  });

  it('should return [] if arr does not have negative number', () => {
    expect(generateNegativeListV2([2, 4, 6, 8])).toEqual([]);
  });

  it('should return odd list from array A', () => {
    expect(generateNegativeListV2([-1, 2, -3, 4, -5, 6, -7, 8, -9])).toEqual([-1, -3, -5, -7, -9]);
  });
});
