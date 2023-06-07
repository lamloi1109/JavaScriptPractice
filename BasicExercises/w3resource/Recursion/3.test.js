// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

import { range } from "./3.js";

describe('range(min, max)', () => {
  it('should return [] if min and max are not a number ', () => {
    expect(range(null, 1)).toEqual([]);
    expect(range(undefined, 1)).toEqual([]);
    expect(range('', 1)).toEqual([]);
    expect(range({}, 1)).toEqual([]);
    expect(range([], 1)).toEqual([]);
    expect(range(1, null)).toEqual([]);
    expect(range(1, undefined)).toEqual([]);
    expect(range(1, '')).toEqual([]);
    expect(range(1, {})).toEqual([]);
    expect(range(1, [])).toEqual([]);
  });
  it('should return [] if min > max', () => {
    expect(range(1, -1)).toEqual([]);
  });
  it('should return list', () => {
    expect(range(2, 9)).toEqual([3, 4, 5, 6, 7, 8]);
  });
});
