import { first } from './3.js';

describe('first(arr, n)', () => {
  it('should return undefined if arr is not an array and n is undefined', () => {
    expect(first(null, undefined)).toBe(undefined);
    expect(first(undefined, undefined)).toBe(undefined);
    expect(first({}, undefined)).toBe(undefined);
    expect(first('', undefined)).toBe(undefined);
    expect(first(123, undefined)).toBe(undefined);
    expect(first(null, 1)).toBe(undefined);
    expect(first(undefined, 1)).toBe(undefined);
    expect(first({}, 1)).toBe(undefined);
    expect(first('', 1)).toBe(undefined);
    expect(first(123, 1)).toBe(undefined);
  });

  it('should return [] if arr is empty array', () => {
    expect(first([], undefined)).toEqual([]);
    expect(first([], 1)).toEqual([]);
  });

  it('should return undefined if arr is empty array', () => {
    expect(first([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    expect(first([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
    expect(first([], -6)).toEqual([]);
  });

  it('should return first element', () => {
    expect(first([1, 2, 3, 4])).toBe(1);
    expect(first([7,9, 0, -2])).toBe(7);
  });
});
