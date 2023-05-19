// Bài 123: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên

import {
  findMinNumberIndexInList,
  findMinNumberIndexInListV2,
  findMinNumberIndexInListV3,
  findMinNumberIndexInListV4,
} from './Ex123.js';

describe('findMinNumberIndexInList(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMinNumberIndexInList({})).toBe(undefined);
    expect(findMinNumberIndexInList(null)).toBe(undefined);
    expect(findMinNumberIndexInList(undefined)).toBe(undefined);
    expect(findMinNumberIndexInList('')).toBe(undefined);
    expect(findMinNumberIndexInList(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMinNumberIndexInList([])).toBe(undefined);
  });

  it('should return min number index', () => {
    expect(findMinNumberIndexInList([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0);
    expect(findMinNumberIndexInList([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(4);
    expect(findMinNumberIndexInList([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0);
    expect(findMinNumberIndexInList([0.1, 0.2, 0.3])).toBe(0);
  });
});

describe('findMinNumberIndexInListV2(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMinNumberIndexInListV2({})).toBe(undefined);
    expect(findMinNumberIndexInListV2(null)).toBe(undefined);
    expect(findMinNumberIndexInListV2(undefined)).toBe(undefined);
    expect(findMinNumberIndexInListV2('')).toBe(undefined);
    expect(findMinNumberIndexInListV2(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMinNumberIndexInListV2([])).toBe(undefined);
  });

  it('should return max number', () => {
    expect(findMinNumberIndexInListV2([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0);
    expect(findMinNumberIndexInListV2([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(4);
    expect(findMinNumberIndexInListV2([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0);
    expect(findMinNumberIndexInListV2([0.1, 0.2, 0.3])).toBe(0);
  });
});

describe('findMinNumberIndexInListV3(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMinNumberIndexInListV3({})).toBe(undefined);
    expect(findMinNumberIndexInListV3(null)).toBe(undefined);
    expect(findMinNumberIndexInListV3(undefined)).toBe(undefined);
    expect(findMinNumberIndexInListV3('')).toBe(undefined);
    expect(findMinNumberIndexInListV3(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMinNumberIndexInListV3([])).toBe(undefined);
  });

  it('should return max number', () => {
    expect(findMinNumberIndexInListV3([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0);
    expect(findMinNumberIndexInListV3([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(4);
    expect(findMinNumberIndexInListV3([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0);
    expect(findMinNumberIndexInListV3([0.1, 0.2, 0.3])).toBe(0);
  });
});

describe('findMinNumberIndexInListV4(numberList)', () => {
  it('should return undefined if list is not an arr', () => {
    expect(findMinNumberIndexInListV4({})).toBe(undefined);
    expect(findMinNumberIndexInListV4(null)).toBe(undefined);
    expect(findMinNumberIndexInListV4(undefined)).toBe(undefined);
    expect(findMinNumberIndexInListV4('')).toBe(undefined);
    expect(findMinNumberIndexInListV4(123)).toBe(undefined);
  });
  it('should return undefined if list is empty array', () => {
    expect(findMinNumberIndexInListV4([])).toBe(undefined);
  });

  it('should return max number', () => {
    expect(findMinNumberIndexInListV4([0.1, 0.2, 0.3, 0.4, 0.5])).toBe(0);
    expect(findMinNumberIndexInListV4([0.5, 0.4, 0.3, 0.2, 0.1])).toBe(4);
    expect(findMinNumberIndexInListV4([0.1, 0.2, 0.3, 0.5, 0.4, 0.3])).toBe(0);
    expect(findMinNumberIndexInListV4([0.1, 0.2, 0.3])).toBe(0);
  });
});
