// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

import { is_array } from './1.js';

describe('is_array(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(is_array(null)).toBe(false);
    expect(is_array(undefined)).toBe(false);
    expect(is_array({})).toBe(false);
    expect(is_array('')).toBe(false);
    expect(is_array(123)).toBe(false);
  });

  it('should return true', () => {
    expect(is_array([])).toBe(true);
    expect(is_array([1, 2, 3])).toBe(true);
  });
});
