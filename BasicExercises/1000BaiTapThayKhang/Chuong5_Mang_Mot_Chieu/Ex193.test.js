// Bài 193: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị trong mảng có dạng 3^k. Nếu mảng không có giá trị đó thì trả về 0

import { findAllValue } from "./Ex193.js";

describe('findAllValue(arr)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(findAllValue(null)).toBe(undefined);
    expect(findAllValue(undefined)).toBe(undefined);
    expect(findAllValue({})).toBe(undefined);
    expect(findAllValue('')).toBe(undefined);
    expect(findAllValue(123)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(findAllValue([])).toBe(undefined);
  });

  it('should return value list if value has form 3 ^ k', () => {
    expect(findAllValue([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([3, 9]);
  });
});
