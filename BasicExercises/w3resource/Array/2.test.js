// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

import { array_Clone } from './2.js';

describe('array_Clone(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(array_Clone(null)).toBe(undefined);
    expect(array_Clone(undefined)).toBe(undefined);
    expect(array_Clone({})).toBe(undefined);
    expect(array_Clone('')).toBe(undefined);
    expect(array_Clone(123)).toBe(undefined);
  });

  it('should return new array', () => {
    expect(array_Clone([])).toEqual([]);
    expect(array_Clone([1, 2, 3, 4, 0])).toEqual([1, 2, 3, 4, 0]);
    expect(array_Clone([1, 2, 3, [4, 0]])).toEqual([1, 2, 3, [4, 0]]);
    expect(array_Clone([1, 2, 3, [4, 0, [1,2,3]]])).toEqual([1, 2, 3, [4, 0, [1,2,3]]]);
  
});
  it('compare old and new array', () => {
    const arr = [1, 2, 3, [4, 0]];
    const arr2 = arr;
    const newArr = array_Clone(arr);
    expect(arr === newArr).toBe(false);
    expect(arr === arr2).toBe(true);
  });
});
