// Bài 29: Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25

import { findDivisorOddNumberHighest } from "./Ex29.js";

describe('findDivisorOddNumberHighest', () => {
  it('should return undefined if number is not a number', () => {
    expect(findDivisorOddNumberHighest({})).toBe(undefined);
    expect(findDivisorOddNumberHighest(null)).toBe(undefined);
    expect(findDivisorOddNumberHighest(undefined)).toBe(undefined);
    expect(findDivisorOddNumberHighest([])).toBe(undefined);
    expect(findDivisorOddNumberHighest('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(findDivisorOddNumberHighest(0)).toBe(undefined);
    expect(findDivisorOddNumberHighest(-1)).toBe(undefined);
    expect(findDivisorOddNumberHighest(-2)).toBe(undefined);
    expect(findDivisorOddNumberHighest(-3)).toBe(undefined);
  });

  it('should return max', () => {
    expect(findDivisorOddNumberHighest(100)).toBe(25);
  });
});
