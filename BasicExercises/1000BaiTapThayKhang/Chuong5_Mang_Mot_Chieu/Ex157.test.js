import { findAtoB } from './Ex157.js';

describe('findAtoB(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(findAtoB(null)).toBe(undefined);
    expect(findAtoB(undefined)).toBe(undefined);
    expect(findAtoB({})).toBe(undefined);
    expect(findAtoB('')).toBe(undefined);
    expect(findAtoB(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(findAtoB([])).toBe(undefined);
  });

  it('should return arr if [a, b] is arr', () => {
    expect(findAtoB([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return correct sub arr if arr has duplicate value', () => {
    expect(findAtoB([1, 2, 2, 3, 1, 2, 3])).toEqual([1, 2, 2, 3]);
    expect(findAtoB([3, 2, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([3, 2, 1]);
    expect(findAtoB([1, 1, 1, 1, 1])).toEqual([1]);
    expect(findAtoB([1, 1, 1, 1, 1, 2, 3, 2, 2, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(findAtoB([1, 1, 2, 2, 3, 1, 2, 3, 1, 1, 1, 2, 2])).toEqual([1, 2, 2, 3]);
    expect(findAtoB([3, 3, 3, 3, 3, 1, 2, 3, 3, 3, 2, 2, 2])).toEqual([3, 1, 2]);
    expect(findAtoB([2, 2, 2, 2, 3, 1, 2, 2, 2, 3, 3])).toEqual([2, 3, 1]);
  });
});
