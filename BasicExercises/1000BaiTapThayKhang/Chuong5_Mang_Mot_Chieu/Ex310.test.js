// Bài 310: Tạo mảng b chỉ chứa số nguyên tố từ mảng a

import { generatePrimeNumberList } from "./Ex310.js";

describe('generatePrimeNumberList(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(generatePrimeNumberList(null)).toBe(undefined);
    expect(generatePrimeNumberList(undefined)).toBe(undefined);
    expect(generatePrimeNumberList({})).toBe(undefined);
    expect(generatePrimeNumberList('')).toBe(undefined);
    expect(generatePrimeNumberList(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(generatePrimeNumberList([])).toBe(undefined);
  });

  it('should return [] if arr does not have prime number', () => {
    expect(generatePrimeNumberList([4, 6, 8, 10])).toEqual([]);
  });

  it('should return arr if arr is prime number List', () => {
    expect(generatePrimeNumberList([2, 5, 7])).toEqual([2, 5, 7]);
  });
  it('should return prime number List', () => {
    expect(generatePrimeNumberList([2, 5, 7])).toEqual([2, 5, 7]);
  });
});
