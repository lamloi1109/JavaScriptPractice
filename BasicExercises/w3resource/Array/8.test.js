// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// frequent
// Sample Output : a ( 5 times )

import { findTheMostFrequentItem } from './8.js';

// invalid array
// case 0 time
// case more times

describe('findTheMostFrequentItem(array)', () => {
  it('should return undefined if array is an valid', () => {
    expect(findTheMostFrequentItem(undefined)).toBeUndefined();
    expect(findTheMostFrequentItem(null)).toBeUndefined();
    expect(findTheMostFrequentItem('')).toBeUndefined();
    expect(findTheMostFrequentItem(123)).toBeUndefined();
    expect(findTheMostFrequentItem({})).toBeUndefined();
    expect(findTheMostFrequentItem([])).toBeUndefined();
  });
  it('should return the most frequent item in an array.', () => {
    const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    expect(findTheMostFrequentItem(arr1)).toBe('a ( 5 times )');
  });
});
