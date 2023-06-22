import { last } from "./4.js";

describe('last(arr, n)', () => {
  it('should return undefined if arr is not an array and n is undefined', () => {
    expect(last(null, undefined)).toBe(undefined);
    expect(last(undefined, undefined)).toBe(undefined);
    expect(last({}, undefined)).toBe(undefined);
    expect(last('', undefined)).toBe(undefined);
    expect(last(123, undefined)).toBe(undefined);
    expect(last(null, 1)).toBe(undefined);
    expect(last(undefined, 1)).toBe(undefined);
    expect(last({}, 1)).toBe(undefined);
    expect(last('', 1)).toBe(undefined);
    expect(last(123, 1)).toBe(undefined);
  });

  it('should return [] if arr is empty array', () => {
    expect(last([], undefined)).toEqual([]);
    expect(last([], 1)).toEqual([]);
  });

  it('should return array', () => {
    expect(last([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    expect(last([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
    expect(last([], -6)).toEqual([]);
  });

  it('should return last element', () => {
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([7, 9, 0, -2])).toBe(-2);
  });
});
