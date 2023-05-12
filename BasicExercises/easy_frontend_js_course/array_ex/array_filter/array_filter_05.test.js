// Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong
// mảng.
// Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.
// Mảng kết quả không bao gồm số dương chẵn đầu tiên.

import { findAllNumbers, findAllNumbersV2, findAllNumbersV3 } from './array_filter_05.js';

describe('findAllNumbers(numberList)', () => {
  it('should return [] if list is not an array', () => {
    expect(findAllNumbers({})).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllNumbers([])).toStrictEqual([]);
  });

  it('should return [] if list does not have even number', () => {
    expect(findAllNumbers([1, 3, 5, 7])).toStrictEqual([]);
  });

  it('should return [] if list has only even number', () => {
    expect(findAllNumbers([1, 2, 5, 7])).toStrictEqual([]);
  });

  it('should return correct list if list has many even number', () => {
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toStrictEqual([4, 4]);
  });
});

describe('findAllNumbersV2(numberList)', () => {
  it('should return [] if list is not an array', () => {
    expect(findAllNumbersV2({})).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllNumbersV2([])).toStrictEqual([]);
  });

  it('should return [] if list does not have even number', () => {
    expect(findAllNumbersV2([1, 3, 5, 7])).toStrictEqual([]);
  });

  it('should return [] if list has only even number', () => {
    expect(findAllNumbersV2([1, 2, 5, 7])).toStrictEqual([]);
  });

  it('should return correct list if list has many even number', () => {
    expect(findAllNumbersV2([1, 4, 5, -6, 4, 5, 4])).toStrictEqual([4, 4]);
  });
});


describe('findAllNumbersV3(numberList)', () => {
    it('should return [] if list is not an array', () => {
      expect(findAllNumbersV3({})).toStrictEqual([]);
    });
    it('should return [] if list is empty array', () => {
      expect(findAllNumbersV3([])).toStrictEqual([]);
    });
  
    it('should return [] if list does not have even number', () => {
      expect(findAllNumbersV3([1, 3, 5, 7])).toStrictEqual([]);
    });
  
    it('should return [] if list has only even number', () => {
      expect(findAllNumbersV3([1, 2, 5, 7])).toStrictEqual([]);
    });
  
    it('should return correct list if list has many even number', () => {
      expect(findAllNumbersV3([1, 4, 5, -6, 4, 5, 4])).toStrictEqual([4, 4]);
    });
  });
  