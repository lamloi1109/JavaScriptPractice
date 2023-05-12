// Tổng các chữ số nhỏ nhất của số trong mảng
// Viết hàm sumAllMinDigits(numberList) để tính tổng các chữ số nhỏ nhất của từng số trong mảng
// numberList

import { sumAllMinDigits, sumAllMinDigitsV2 } from "./array_sum_03.js";

describe('sumAllMinDigits(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(sumAllMinDigits(null)).toBe(0);
    expect(sumAllMinDigits(undefined)).toBe(0);
    expect(sumAllMinDigits('')).toBe(0);
    expect(sumAllMinDigits(123)).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(sumAllMinDigits([])).toBe(0);
  });
  // Nếu tất cả đều bằng nhau thì ai là thằng nhỏ nhất ?
//   it('should return 0 if list does have min number', () => {
//     expect(sumAllMinDigits([2222,3333,1111])).toBe(0);
//   });

  it('should return correct sum', () => {
    expect(sumAllMinDigits([123])).toBe(1);
    expect(sumAllMinDigits([123, 532])).toBe(3);
  });
});


describe('sumAllMinDigitsV2(numberList)', () => {
    it('should return 0 if list is not an array', () => {
      expect(sumAllMinDigitsV2(null)).toBe(0);
      expect(sumAllMinDigitsV2(undefined)).toBe(0);
      expect(sumAllMinDigitsV2('')).toBe(0);
      expect(sumAllMinDigitsV2(123)).toBe(0);
    });
    it('should return 0 if list is empty array', () => {
      expect(sumAllMinDigitsV2([])).toBe(0);
    });
    // Nếu tất cả đều bằng nhau thì ai là thằng nhỏ nhất ?
  //   it('should return 0 if list does have min number', () => {
  //     expect(sumAllMinDigitsV2([2222,3333,1111])).toBe(0);
  //   });
  
    it('should return correct sum', () => {
      expect(sumAllMinDigitsV2([123])).toBe(1);
      expect(sumAllMinDigitsV2([123, 532])).toBe(3);
    });
  });
  