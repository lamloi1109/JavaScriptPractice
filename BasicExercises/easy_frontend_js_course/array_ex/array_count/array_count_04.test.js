// Ðếm số lượng các số khác nhau có trong mảng
// Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng.

import { countUniqueNumbers, countUniqueNumbersV2, countUniqueNumbersV3 } from './array_count_04.js';

describe('countUniqueNumbers(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(countUniqueNumbers('đá')).toBe(0);
    expect(countUniqueNumbers({})).toBe(0);
    expect(countUniqueNumbers(null)).toBe(0);
    expect(countUniqueNumbers(undefined)).toBe(0);
    expect(countUniqueNumbers(NaN)).toBe(0);
    expect(countUniqueNumbers(123)).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(countUniqueNumbers([])).toBe(0);
  });

  it('should return 0 if list is not type number', () => {
    expect(countUniqueNumbers([null, undefined, {}])).toBe(0);
  });

  it('should return correct number if list has unique number', () => {
    expect(countUniqueNumbers([1, 2, 3, 1])).toBe(3);
    expect(countUniqueNumbers([1, 1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
    expect(countUniqueNumbers([1, 2, 2, 3, 1])).toBe(3);
  });
});

describe('countUniqueNumbersV2(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(countUniqueNumbersV2('đá')).toBe(0);
    expect(countUniqueNumbersV2({})).toBe(0);
    expect(countUniqueNumbersV2(null)).toBe(0);
    expect(countUniqueNumbersV2(undefined)).toBe(0);
    expect(countUniqueNumbersV2(NaN)).toBe(0);
    expect(countUniqueNumbersV2(123)).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(countUniqueNumbersV2([])).toBe(0);
  });

  it('should return 0 if list is not type number', () => {
    expect(countUniqueNumbersV2([null, undefined, {}])).toBe(0);
  });

  it('should return correct number if list has unique number', () => {
    expect(countUniqueNumbersV2([1, 2, 3, 1])).toBe(3);
    expect(countUniqueNumbersV2([1, 1, 1, 1])).toBe(1);
    expect(countUniqueNumbersV2([1, 2, 3])).toBe(3);
    expect(countUniqueNumbersV2([1, 2, 2, 3, 1])).toBe(3);
  });
});

describe('countUniqueNumbersV3(numberList)', () => {
    it('should return 0 if list is not an array', () => {
      expect(countUniqueNumbersV3('đá')).toBe(0);
      expect(countUniqueNumbersV3({})).toBe(0);
      expect(countUniqueNumbersV3(null)).toBe(0);
      expect(countUniqueNumbersV3(undefined)).toBe(0);
      expect(countUniqueNumbersV3(NaN)).toBe(0);
      expect(countUniqueNumbersV3(123)).toBe(0);
    });
    it('should return 0 if list is empty array', () => {
      expect(countUniqueNumbersV3([])).toBe(0);
    });
  
    it('should return 0 if list is not type number', () => {
      expect(countUniqueNumbersV3([null, undefined, {}])).toBe(0);
    });
  
    it('should return correct number if list has unique number', () => {
      expect(countUniqueNumbersV3([1, 2, 3, 1])).toBe(3);
      expect(countUniqueNumbersV3([1, 1, 1, 1])).toBe(1);
      expect(countUniqueNumbersV3([1, 2, 3])).toBe(3);
      expect(countUniqueNumbersV3([1, 2, 2, 3, 1])).toBe(3);
    });
  });
  