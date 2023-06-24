// Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

import { powerset } from './8..js';

describe('powerset(list)', () => {
  it('should return undefined if list is invalid', () => {
    expect(powerset(null)).toBeUndefined();
    expect(powerset(undefined)).toBeUndefined();
    expect(powerset({})).toBeUndefined();
    expect(powerset(123)).toBeUndefined();
    expect(powerset('')).toBeUndefined();
  });

  it('should return [] if list is an empty', () => {
    expect(powerset([])).toEqual([]);
  });

  it('should return array containing all combinations', () => {
    expect(powerset([1, 2])).toEqual([[], [1], [2], [2, 1]]);
  });
});
