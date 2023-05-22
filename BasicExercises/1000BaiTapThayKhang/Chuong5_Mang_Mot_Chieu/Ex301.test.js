// Bài 301: Cho biết mảng a có phải là mảng con của mảng b không

import { isAInB, isAInBV2 } from './Ex301.js';

describe('isAInB(arrA, arrB)', () => {
  it('should return undefined if arrA is not an array', () => {
    expect(isAInB(null, [])).toBe(undefined);
    expect(isAInB(undefined, [])).toBe(undefined);
    expect(isAInB({}, [])).toBe(undefined);
    expect(isAInB('', [])).toBe(undefined);
    expect(isAInB(123, [])).toBe(undefined);
  });

  it('should return undefined if arrAB is not an array', () => {
    expect(isAInB([], null)).toBe(undefined);
    expect(isAInB([], undefined)).toBe(undefined);
    expect(isAInB([], {})).toBe(undefined);
    expect(isAInB([], '')).toBe(undefined);
    expect(isAInB([], 123)).toBe(undefined);
  });

  it('should return undefined if arrA and arrB are empty array', () => {
    expect(isAInB([], [])).toBe(undefined);
  });

  it('should return false', () => {
    expect(isAInB([0, 5], [1, 2, 3, 4, 5])).toBe(false);
    expect(isAInB([0, 6, 7], [1, 2, 3, 4, 5])).toBe(false);
  });

  it('should return true', () => {
    expect(isAInB([1, 2, 3], [1, 2, 3, 4, 5])).toBe(true);
  });
});

describe('isAInBV2(arrA, arrB)', () => {
  it('should return undefined if arrA is not an array', () => {
    expect(isAInBV2(null, [])).toBe(undefined);
    expect(isAInBV2(undefined, [])).toBe(undefined);
    expect(isAInBV2({}, [])).toBe(undefined);
    expect(isAInBV2('', [])).toBe(undefined);
    expect(isAInBV2(123, [])).toBe(undefined);
  });

  it('should return undefined if arrAB is not an array', () => {
    expect(isAInBV2([], null)).toBe(undefined);
    expect(isAInBV2([], undefined)).toBe(undefined);
    expect(isAInBV2([], {})).toBe(undefined);
    expect(isAInBV2([], '')).toBe(undefined);
    expect(isAInBV2([], 123)).toBe(undefined);
  });

  it('should return undefined if arrA and arrB are empty array', () => {
    expect(isAInBV2([], [])).toBe(undefined);
  });

  it('should return false', () => {
    expect(isAInBV2([0, 5], [1, 2, 3, 4, 5])).toBe(false);
    expect(isAInBV2([0, 6, 7], [1, 2, 3, 4, 5])).toBe(false);
  });

  it('should return true', () => {
    expect(isAInBV2([1, 2, 3], [1, 2, 3, 4, 5])).toBe(true);
  });
});
