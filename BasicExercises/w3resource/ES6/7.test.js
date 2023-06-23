// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

import { pull } from './7.js';

describe('pull(list1,...list2)', () => {
  it('should return undefined if list1 and list2 are invalid', () => {
    expect(pull(null, 'a', 'c')).toBeUndefined();
    expect(pull(undefined, 'a', 'c')).toBeUndefined();
    expect(pull(123, 'a', 'c')).toBeUndefined();
    expect(pull('', 'a', 'c')).toBeUndefined();
    expect(pull({}, 'a', 'c')).toBeUndefined();
    expect(pull([], 'a', 'c')).toBeUndefined();

    expect(pull(['a', 'b', 'c', 'a', 'b', 'c'])).toBeUndefined();
  });
  it('should return the original array without filtered values', () => {
    let arr = ['a', 'b', 'c', 'a', 'b', 'c'];

    expect(pull(arr, 'a', 'c')).toEqual(['b', 'b']);

    expect(arr === pull(arr, 'b')).toBe(true);
  });
});
