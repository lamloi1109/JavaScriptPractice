// Bài 234: Cho 2 mảng a, b. Đếm số lượng giá trị chỉ xuất hiện 1 trong 2 mảng

import { countValueInAorB } from "./Ex234.js";

describe('countValueInAorB(arrA, arrB)', () => {
  it('should return undefined if arrA is not an array', () => {
    expect(countValueInAorB(null, [])).toBe(undefined);
    expect(countValueInAorB(undefined, [])).toBe(undefined);
    expect(countValueInAorB({}, [])).toBe(undefined);
    expect(countValueInAorB('', [])).toBe(undefined);
    expect(countValueInAorB(123, [])).toBe(undefined);
  });

  it('should return undefined if arrA is not an array', () => {
    expect(countValueInAorB([], null)).toBe(undefined);
    expect(countValueInAorB([], undefined)).toBe(undefined);
    expect(countValueInAorB([], {})).toBe(undefined);
    expect(countValueInAorB([], '')).toBe(undefined);
    expect(countValueInAorB([], 123)).toBe(undefined);
  });

  it('should return undefined if arrA and ArrayB is empty array', () => {
    expect(countValueInAorB([], [])).toBe(undefined);
  });

  it('should return 0 if arrA is arrB', () => {
    expect(countValueInAorB([1, 2, 3], [1, 2, 3])).toBe(0);
  });

  it('should return correct number', () => {
    expect(countValueInAorB([1, 2, 3], [1, 2, 3, 4])).toBe(1);
    expect(countValueInAorB([1, 2, 3, 4], [1, 2, 3])).toBe(1);
    expect(countValueInAorB([1, 2, 3, 4, 5, 6], [1, 2, 3])).toBe(3);
  });
});
