// Ðếm số lượng các số có trong mảng a mà không có trong mảng b
// Viết hàm countNumbersNotInB(a, b) để đếm có bao nhiếu số xuất hiện trong mảng a, mà không có trong
// mảng b

import {
  countNumbersNotInB,
  countNumbersNotInBV2,
  countNumbersNotInBV3,
} from './array_count_05.js';

describe('countNumbersNotInB(a, b)', () => {
  it('should return 0 if list a is not an array', () => {
    expect(countNumbersNotInB([], [1, 2, 3])).toBe(0);
  });

  it('should return 0 if list a is empty array', () => {
    expect(countNumbersNotInB([], [1, 2, 3])).toBe(0);
  });

  it('should return length of list A if list B is not an array', () => {
    expect(countNumbersNotInB([1, 2, 3], {})).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], null)).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], undefined)).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], 123)).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], '')).toBe(3);
  });

  it('should return length of list A if list B is empty array', () => {
    expect(countNumbersNotInB([1, 2, 3], [])).toBe(3);
  });

  it('should return length of list A if list B is empty array', () => {
    expect(countNumbersNotInB([1, 2, 3], [])).toBe(3);
  });

  it('should return 0 if A is B', () => {
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB([1, 2], [1, 2])).toBe(0);
    expect(countNumbersNotInB([1, 2, 3, 4], [1, 2, 3, 4])).toBe(0);
  });

  it('should return correct number A not in B', () => {
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
  });
});

describe('countNumbersNotInBV2(a, b)', () => {
  it('should return 0 if list a is not an array', () => {
    expect(countNumbersNotInBV2([], [1, 2, 3])).toBe(0);
  });

  it('should return 0 if list a is empty array', () => {
    expect(countNumbersNotInBV2([], [1, 2, 3])).toBe(0);
  });

  it('should return length of list A if list B is not an array', () => {
    expect(countNumbersNotInBV2([1, 2, 3], {})).toBe(3);
    expect(countNumbersNotInBV2([1, 2, 3], null)).toBe(3);
    expect(countNumbersNotInBV2([1, 2, 3], undefined)).toBe(3);
    expect(countNumbersNotInBV2([1, 2, 3], 123)).toBe(3);
    expect(countNumbersNotInBV2([1, 2, 3], '')).toBe(3);
  });

  it('should return length of list A if list B is empty array', () => {
    expect(countNumbersNotInBV2([1, 2, 3], [])).toBe(3);
  });

  it('should return length of list A if list B is empty array', () => {
    expect(countNumbersNotInBV2([1, 2, 3], [])).toBe(3);
  });

  it('should return 0 if A is B', () => {
    expect(countNumbersNotInBV2([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInBV2([1, 2], [1, 2])).toBe(0);
    expect(countNumbersNotInBV2([1, 2, 3, 4], [1, 2, 3, 4])).toBe(0);
  });

  it('should return correct number A not in B', () => {
    expect(countNumbersNotInBV2([1, 2, 3], [3, 4, 5])).toBe(2);
    expect(countNumbersNotInBV2([1, 2, 3], [4, 5])).toBe(3);
  });
});

describe('countNumbersNotInBV3(a, b)', () => {
  it('should return 0 if list a is not an array', () => {
    expect(countNumbersNotInBV3([], [1, 2, 3])).toBe(0);
  });

  it('should return 0 if list a is empty array', () => {
    expect(countNumbersNotInBV3([], [1, 2, 3])).toBe(0);
  });

  it('should return length of list A if list B is not an array', () => {
    expect(countNumbersNotInBV3([1, 2, 3], {})).toBe(3);
    expect(countNumbersNotInBV3([1, 2, 3], null)).toBe(3);
    expect(countNumbersNotInBV3([1, 2, 3], undefined)).toBe(3);
    expect(countNumbersNotInBV3([1, 2, 3], 123)).toBe(3);
    expect(countNumbersNotInBV3([1, 2, 3], '')).toBe(3);
  });

  it('should return length of list A if list B is empty array', () => {
    expect(countNumbersNotInBV3([1, 2, 3], [])).toBe(3);
  });

  it('should return length of list A if list B is empty array', () => {
    expect(countNumbersNotInBV3([1, 2, 3], [])).toBe(3);
  });

  it('should return 0 if A is B', () => {
    expect(countNumbersNotInBV3([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInBV3([1, 2], [1, 2])).toBe(0);
    expect(countNumbersNotInBV3([1, 2, 3, 4], [1, 2, 3, 4])).toBe(0);
  });

  it('should return correct number A not in B', () => {
    expect(countNumbersNotInBV3([1, 2, 3], [3, 4, 5])).toBe(2);
    expect(countNumbersNotInBV3([1, 2, 3], [4, 5])).toBe(3);
  });
});
