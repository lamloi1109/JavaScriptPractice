// Ðếm số mà nó nhỏ hơn số liền trước của nó
// Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng

import { countNumbers, countNumbersV2 } from './array_count_02.js';

// liền trước của nó
describe('countNumbers(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(countNumbers({})).toBe(0);
    expect(countNumbers(null)).toBe(0);
    expect(countNumbers('Dsad')).toBe(0);
    expect(countNumbers(undefined)).toBe(0);
    expect(countNumbers(12)).toBe(0);
  });

  it('should return 0 if list is empty array', () => {
    expect(countNumbers([])).toBe(0);
  });

  it('should return 0 if list is increasing number list', () => {
    expect(countNumbers([1, 2, 3, 4, 5])).toBe(0);
  });

  it('should return correct number if list has before number > after number', () => {
    expect(countNumbers([1, 2, 3, 10, 9, 8])).toBe(2);
  });
});

describe('countNumbersV2(numberList)', () => {
    it('should return 0 if list is not an array', () => {
      expect(countNumbersV2({})).toBe(0);
      expect(countNumbersV2(null)).toBe(0);
      expect(countNumbersV2('Dsad')).toBe(0);
      expect(countNumbersV2(undefined)).toBe(0);
      expect(countNumbersV2(12)).toBe(0);
    });
  
    it('should return 0 if list is empty array', () => {
      expect(countNumbersV2([])).toBe(0);
    });
  
    it('should return 0 if list is increasing number list', () => {
      expect(countNumbersV2([1, 2, 3, 4, 5])).toBe(0);
    });
  
    it('should return correct number if list has before number > after number', () => {
      expect(countNumbersV2([1, 2, 3, 10, 9, 8])).toBe(2);
    });
  });