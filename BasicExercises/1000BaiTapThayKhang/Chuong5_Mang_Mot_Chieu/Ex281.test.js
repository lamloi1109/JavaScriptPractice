// Bài 281: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng

import { processArray } from './Ex281.js';

describe('processArray(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(processArray(null)).toBe(undefined);
    expect(processArray(undefined)).toBe(undefined);
    expect(processArray({})).toBe(undefined);
    expect(processArray('')).toBe(undefined);
    expect(processArray(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(processArray([])).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(processArray([])).toBe(undefined);
  });

  it('should return correct list after process', () => {
    expect(processArray([0, 0, 0, 1, 2])).toEqual([2, 0, 0, 0, 1]);
    expect(processArray([2, 1, 0, 0, 0, 0])).toEqual([2, 0, 0, 0, 0, 1]);
    expect(processArray([1, 2, 3, 4, 5, 0])).toEqual([2, 4, 0, 1, 3, 5]);
    expect(processArray([1, 0, 2, 0, 3, 0, 4, 0])).toEqual([2, 4, 0, 0, 0, 0, 1, 3]);
    expect(processArray([2, 2, 2, 1, 1, 1, 0])).toEqual([2, 2, 2, 0, 1, 1, 1]);
  });
});
