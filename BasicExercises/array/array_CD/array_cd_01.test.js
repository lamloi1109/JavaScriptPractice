// Thêm một phần tử tại vị trí k
// Viết hàm insert(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr
// Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng
// Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng

import { insert } from './array_cd_01.js';

describe('insert(arr, newItem, k)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(insert(null, 0, 1)).toBe(undefined);
    expect(insert(undefined, 0, 1)).toBe(undefined);
    expect(insert({}, 0, 1)).toBe(undefined);
    expect(insert('', 0, 1)).toBe(undefined);
    expect(insert(123, 0, 1)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(insert([], 0, 1)).toStrictEqual([0]);
    expect(insert([], 0, -1)).toEqual([0]);
    expect(insert([], 0, 0)).toEqual([0]);
  });

  it('should return correct arr if k > arr.length', () => {
    expect(insert([1, 2, 3], 0, 4)).toEqual([1, 2, 3,0]);
  });

  it('should return correct arr if k <= 0', () => {
    expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
  });
  it('should return correct arr if k > 0, k <= arr.length', () => {
    expect(insert([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });
});
