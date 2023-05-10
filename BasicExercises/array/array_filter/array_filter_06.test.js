// Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ

import { findAllNumbers, findAllNumbersV2 } from './array_filter_06.js';

describe('findAllNumbers(numberList)', () => {
  it('should return [] if list is not an array', () => {
    expect(findAllNumbers('Dsads')).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllNumbers([])).toStrictEqual([]);
  });
  it('should return [] if list does not have number start with odd', () => {
    expect(findAllNumbers([2, 22, 231, 421])).toStrictEqual([]);
  });
  it('should return [] if list has number start with odd', () => {
    expect(findAllNumbers([234, 123, 421])).toStrictEqual([123]);
  });
});

describe('findAllNumbersV2(numberList)', () => {
    it('should return [] if list is not an array', () => {
      expect(findAllNumbersV2('Dsads')).toStrictEqual([]);
    });
    it('should return [] if list is empty array', () => {
      expect(findAllNumbersV2([])).toStrictEqual([]);
    });
    it('should return [] if list does not have number start with odd', () => {
      expect(findAllNumbersV2([2, 22, 231, 421])).toStrictEqual([]);
    });
    it('should return [] if list has number start with odd', () => {
      expect(findAllNumbersV2([234, 123, 421])).toStrictEqual([123]);
    });
  })