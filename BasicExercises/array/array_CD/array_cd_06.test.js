// Xoá các số trùng nhau nhưng giữ lại một số
// Viết hàm uniqueArray(numberList) để xoá các số xuần hiện hơn 1 lần, nhưng giữ lại 1 số.

import { uniqueArray, uniqueArrayV2, uniqueArrayV3 } from "./array_cd_06.js";

describe('uniqueArray(numberList)', () => {
  it('should return [] if list is not an arr', () => {
    expect(uniqueArray(null)).toEqual([]);
    expect(uniqueArray({})).toEqual([]);
    expect(uniqueArray(undefined)).toEqual([]);
    expect(uniqueArray('')).toEqual([]);
    expect(uniqueArray(123)).toEqual([]);
  });
  it('should return [] if list is empty', () => {
    expect(uniqueArray([])).toEqual([]);
  });
  it('should return list if list is unique list', () => {
    expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 2])).toEqual([1, 2]);
    expect(uniqueArray([1])).toEqual([1]);
  });
  it('should return unique list after removed duplicated items', () => {
    expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('uniqueArrayV2(numberList)', () => {
    it('should return [] if list is not an arr', () => {
      expect(uniqueArrayV2(null)).toEqual([]);
      expect(uniqueArrayV2({})).toEqual([]);
      expect(uniqueArrayV2(undefined)).toEqual([]);
      expect(uniqueArrayV2('')).toEqual([]);
      expect(uniqueArrayV2(123)).toEqual([]);
    });
    it('should return [] if list is empty', () => {
      expect(uniqueArrayV2([])).toEqual([]);
    });
    it('should return list if list is unique list', () => {
      expect(uniqueArrayV2([1, 2, 3])).toEqual([1, 2, 3]);
      expect(uniqueArrayV2([1, 2])).toEqual([1, 2]);
      expect(uniqueArrayV2([1])).toEqual([1]);
    });
    it('should return unique list after removed duplicated items', () => {
      expect(uniqueArrayV2([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  
describe('uniqueArrayV3(numberList)', () => {
    it('should return [] if list is not an arr', () => {
      expect(uniqueArrayV3(null)).toEqual([]);
      expect(uniqueArrayV3({})).toEqual([]);
      expect(uniqueArrayV3(undefined)).toEqual([]);
      expect(uniqueArrayV3('')).toEqual([]);
      expect(uniqueArrayV3(123)).toEqual([]);
    });
    it('should return [] if list is empty', () => {
      expect(uniqueArrayV3([])).toEqual([]);
    });
    it('should return list if list is unique list', () => {
      expect(uniqueArrayV3([1, 2, 3])).toEqual([1, 2, 3]);
      expect(uniqueArrayV3([1, 2])).toEqual([1, 2]);
      expect(uniqueArrayV3([1])).toEqual([1]);
    });
    it('should return unique list after removed duplicated items', () => {
      expect(uniqueArrayV3([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    });
  });