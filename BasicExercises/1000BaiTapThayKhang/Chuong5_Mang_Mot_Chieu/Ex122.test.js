// Bài 122: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

import {
  findMaxFloatNumberInList,
  findMaxFloatNumberInListV2,
  findMaxFloatNumberInListV3,
  findMaxFloatNumberInListV4,
} from './Ex122.js';

describe('findMaxFloatNumberInList(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMaxFloatNumberInList({})).toBe(undefined);
    expect(findMaxFloatNumberInList(null)).toBe(undefined);
    expect(findMaxFloatNumberInList(undefined)).toBe(undefined);
    expect(findMaxFloatNumberInList('')).toBe(undefined);
    expect(findMaxFloatNumberInList(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMaxFloatNumberInList([])).toBe(undefined);
  });

  // Mảng chứa các số thực giống nhau: [0.1,0.1,0.1,0.1]
  // Max ở cuối
  // Max ở đầu
  // Max ở giữa
  it('should return max number', () => {
    expect(findMaxFloatNumberInList([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.5);
    expect(findMaxFloatNumberInList([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(0.5);
    expect(findMaxFloatNumberInList([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0.5);
    expect(findMaxFloatNumberInList([0.1, 0.2, 0.3])).toBe(0.3);
  });
});

describe('findMaxFloatNumberInListV2(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMaxFloatNumberInListV2({})).toBe(undefined);
    expect(findMaxFloatNumberInListV2(null)).toBe(undefined);
    expect(findMaxFloatNumberInListV2(undefined)).toBe(undefined);
    expect(findMaxFloatNumberInListV2('')).toBe(undefined);
    expect(findMaxFloatNumberInListV2(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMaxFloatNumberInListV2([])).toBe(undefined);
  });

  // Mảng chứa các số thực giống nhau: [0.1,0.1,0.1,0.1]
  // Max ở cuối
  // Max ở đầu
  // Max ở giữa
  it('should return max number', () => {
    expect(findMaxFloatNumberInListV2([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.5);
    expect(findMaxFloatNumberInListV2([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(0.5);
    expect(findMaxFloatNumberInListV2([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0.5);
    expect(findMaxFloatNumberInListV2([0.1, 0.2, 0.3])).toBe(0.3);
  });
});

describe('findMaxFloatNumberInListV3(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMaxFloatNumberInListV3({})).toBe(undefined);
    expect(findMaxFloatNumberInListV3(null)).toBe(undefined);
    expect(findMaxFloatNumberInListV3(undefined)).toBe(undefined);
    expect(findMaxFloatNumberInListV3('')).toBe(undefined);
    expect(findMaxFloatNumberInListV3(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMaxFloatNumberInListV3([])).toBe(undefined);
  });

  // Mảng chứa các số thực giống nhau: [0.1,0.1,0.1,0.1]
  // Max ở cuối
  // Max ở đầu
  // Max ở giữa
  it('should return max number', () => {
    expect(findMaxFloatNumberInListV3([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.5);
    expect(findMaxFloatNumberInListV3([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(0.5);
    expect(findMaxFloatNumberInListV3([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0.5);
    expect(findMaxFloatNumberInListV3([0.1, 0.2, 0.3])).toBe(0.3);
  });
});

describe('findMaxFloatNumberInListV4(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMaxFloatNumberInListV4({})).toBe(undefined);
    expect(findMaxFloatNumberInListV4(null)).toBe(undefined);
    expect(findMaxFloatNumberInListV4(undefined)).toBe(undefined);
    expect(findMaxFloatNumberInListV4('')).toBe(undefined);
    expect(findMaxFloatNumberInListV4(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMaxFloatNumberInListV4([])).toBe(undefined);
  });

  // Mảng chứa các số thực giống nhau: [0.1,0.1,0.1,0.1]
  // Max ở cuối
  // Max ở đầu
  // Max ở giữa
  it('should return max number', () => {
    expect(findMaxFloatNumberInListV4([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0.5);
    expect(findMaxFloatNumberInListV4([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(0.5);
    expect(findMaxFloatNumberInListV4([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0.5);
    expect(findMaxFloatNumberInListV4([0.1, 0.2, 0.3])).toBe(0.3);
  });
});
