// Xoá các số trùng nhau trong mảng
// Viết hàm removeDuplicatedNumbers(numberList) để xoá tất cả các số xuất hiện hơn 1 lần

import {
  removeDuplicatedNumbers,
  removeDuplicatedNumbersV2,
  removeDuplicatedNumbersV3,
} from './array_cd_05.js';

describe('removeDuplicatedNumbers(numberList)', () => {
  it('should return [] if list is not an arr', () => {
    expect(removeDuplicatedNumbers({})).toEqual([]);
    expect(removeDuplicatedNumbers(null)).toEqual([]);
    expect(removeDuplicatedNumbers(undefined)).toEqual([]);
    expect(removeDuplicatedNumbers('')).toEqual([]);
    expect(removeDuplicatedNumbers(123)).toEqual([]);
  });
  it('should return list if list does not have duplicate number', () => {
    expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicatedNumbers([1])).toEqual([1]);
  });
  it('should return correct list', () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 2, 3])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 1, 2, 1, 3, 2, 1, 2])).toEqual([3]);
  });
});

describe('removeDuplicatedNumbersV2(numberList)', () => {
  it('should return [] if list is not an arr', () => {
    expect(removeDuplicatedNumbersV2({})).toEqual([]);
    expect(removeDuplicatedNumbersV2(null)).toEqual([]);
    expect(removeDuplicatedNumbersV2(undefined)).toEqual([]);
    expect(removeDuplicatedNumbersV2('')).toEqual([]);
    expect(removeDuplicatedNumbersV2(123)).toEqual([]);
  });
  it('should return list if list does not have duplicate number', () => {
    expect(removeDuplicatedNumbersV2([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicatedNumbersV2([1])).toEqual([1]);
  });
  it('should return correct list', () => {
    expect(removeDuplicatedNumbersV2([1, 1, 2, 2, 3])).toEqual([3]);
    expect(removeDuplicatedNumbersV2([1, 1, 2, 1, 3, 2, 1, 2])).toEqual([3]);
  });
});

describe('removeDuplicatedNumbersV3(numberList)', () => {
  it('should return [] if list is not an arr', () => {
    expect(removeDuplicatedNumbersV3({})).toEqual([]);
    expect(removeDuplicatedNumbersV3(null)).toEqual([]);
    expect(removeDuplicatedNumbersV3(undefined)).toEqual([]);
    expect(removeDuplicatedNumbersV3('')).toEqual([]);
    expect(removeDuplicatedNumbersV3(123)).toEqual([]);
  });
  it('should return list if list does not have duplicate number', () => {
    expect(removeDuplicatedNumbersV3([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicatedNumbersV3([1])).toEqual([1]);
  });
  it('should return correct list', () => {
    expect(removeDuplicatedNumbersV3([1, 1, 2, 2, 3])).toEqual([3]);
    expect(removeDuplicatedNumbersV3([1, 1, 2, 1, 3, 2, 1, 2])).toEqual([3]);
  });
});
