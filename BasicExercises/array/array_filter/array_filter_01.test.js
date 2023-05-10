import { generateNumberInRange, generateNumberInRangeV2 } from "./array_filter_01.js";
// Liệt kê các số trong khoảng [a, b]
// Viết hàm generateNumberInRange(a, b) để tạo ra một mảng các số từ a đến b (có bao gồm a và b)
describe('generateNumberInRange(a, b)', () => {
  it('should return empty array if a is not a number', () => {
    expect(generateNumberInRange(-1, 2)).toStrictEqual([]);
  });
  it('should return empty array if b is not a number', () => {
    expect(generateNumberInRange(1, -2)).toStrictEqual([]);
  });
  it('should return empty array if a >= b', () => {
    expect(generateNumberInRange(7, 5)).toStrictEqual([]);
    expect(generateNumberInRange(7, 7)).toStrictEqual([]);
  });
  it('should return correct array if a < b', () => {
    expect(generateNumberInRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRange(5, 7)).toStrictEqual([5, 6, 7]);
  });
});


describe('generateNumberInRangeV2(a, b)', () => {
  it('should return empty array if a is not a number', () => {
    expect(generateNumberInRangeV2(-1, 2)).toStrictEqual([]);
  });
  it('should return empty array if b is not a number', () => {
    expect(generateNumberInRangeV2(1, -2)).toStrictEqual([]);
  });
  it('should return empty array if a >= b', () => {
    expect(generateNumberInRangeV2(7, 5)).toStrictEqual([]);
    expect(generateNumberInRangeV2(7, 7)).toStrictEqual([]);
  });
  it('should return correct array if a < b', () => {
    expect(generateNumberInRangeV2(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRangeV2(5, 7)).toStrictEqual([5, 6, 7]);
  });
});