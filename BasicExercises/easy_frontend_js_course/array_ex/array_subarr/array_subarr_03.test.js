// Kiểm tra mảng a có phải là mảng con của mảng b
// Viết hàm isSubArray(a, b) để kiểm tra xem a có phải là mảng con của b không?
// Nếu a là mảng rỗng thì luôn trả về true.
// Nếu a có độ dài lớn hơn b thì luôn trả về false.
// Trả về true nếu toàn bộ mảng a nằm trong mảng b theo đúng thứ tự của từng phần tử trong mảng a.

import { isSubArray, isSubArrayV2, isSubArrayV3 } from './array_subarr_03.js';

describe('isSubArray(a, b)', () => {
  it('should return false if list a is not an array', () => {
    expect(isSubArray({}, [])).toBe(false);
    expect(isSubArray(null, [])).toBe(false);
    expect(isSubArray(undefined, [])).toBe(false);
    expect(isSubArray('', [])).toBe(false);
    expect(isSubArray(123, [])).toBe(false);
  });

  it('should return true if list a is empty', () => {
    expect(isSubArray([], {})).toBe(true);
    expect(isSubArray([], null)).toBe(true);
    expect(isSubArray([], undefined)).toBe(true);
    expect(isSubArray([], '')).toBe(true);
    expect(isSubArray([], 123)).toBe(true);
  });

  it('should return false if list a is not contain list b', () => {
    expect(isSubArray([1, 2], [2, 3, 4])).toBe(false);
  });

  it('should return true if list a is contain list b', () => {
    expect(isSubArray([1, 2], [1, 2, 3])).toBe(true);
  });
});

describe('isSubArrayV2(a, b)', () => {
  it('should return false if list a is not an array', () => {
    expect(isSubArrayV2({}, [])).toBe(false);
    expect(isSubArrayV2(null, [])).toBe(false);
    expect(isSubArrayV2(undefined, [])).toBe(false);
    expect(isSubArrayV2('', [])).toBe(false);
    expect(isSubArrayV2(123, [])).toBe(false);
  });

  it('should return true if list a is empty', () => {
    expect(isSubArrayV2([], {})).toBe(true);
    expect(isSubArrayV2([], null)).toBe(true);
    expect(isSubArrayV2([], undefined)).toBe(true);
    expect(isSubArrayV2([], '')).toBe(true);
    expect(isSubArrayV2([], 123)).toBe(true);
  });

  it('should return false if list a is not contain list b', () => {
    expect(isSubArrayV2([1, 2], [2, 3, 4])).toBe(false);
  });

  it('should return true if list a is contain list b', () => {
    expect(isSubArrayV2([1, 2], [1, 2, 3])).toBe(true);
  });
});

describe('isSubArrayV3(a, b)', () => {
  it('should return false if list a is not an array', () => {
    expect(isSubArrayV3({}, [])).toBe(false);
    expect(isSubArrayV3(null, [])).toBe(false);
    expect(isSubArrayV3(undefined, [])).toBe(false);
    expect(isSubArrayV3('', [])).toBe(false);
    expect(isSubArrayV3(123, [])).toBe(false);
  });

  it('should return true if list a is empty', () => {
    expect(isSubArrayV3([], {})).toBe(true);
    expect(isSubArrayV3([], null)).toBe(true);
    expect(isSubArrayV3([], undefined)).toBe(true);
    expect(isSubArrayV3([], '')).toBe(true);
    expect(isSubArrayV3([], 123)).toBe(true);
  });

  it('should return false if list a is not contain list b', () => {
    expect(isSubArrayV3([1, 2], [2, 3, 4])).toBe(false);
  });

  it('should return true if list a is contain list b', () => {
    expect(isSubArrayV3([1, 2], [1, 2, 3])).toBe(true);
  });
});
