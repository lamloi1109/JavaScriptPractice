import { isIncreasingNumber, isIncreasingNumberV2 } from "./number_01.js";
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.

// function isIncreasingNumber(n)
// n is not a number -> false
// n < 0
// n > 1000000
// n.length < 2

describe("isIncreasingNumber(n)", () => {
  test("should return false when n is not a number", () => {
    expect(isIncreasingNumberV2("abc")).toBe(false);
    expect(isIncreasingNumberV2([])).toBe(false);
    expect(isIncreasingNumberV2(null)).toBe(false);
  });
  test("should return false when n < 0", () => {
    expect(isIncreasingNumberV2(-1)).toBe(false);
    expect(isIncreasingNumberV2(-2)).toBe(false);
    expect(isIncreasingNumberV2(-3)).toBe(false);
  });
  test("should return false when n > 1000000", () => {
    expect(isIncreasingNumberV2(1000001)).toBe(false);
    expect(isIncreasingNumberV2(1000002)).toBe(false);
    expect(isIncreasingNumberV2(1000003)).toBe(false);
  });
  test("should return false when n < 9", () => {
    Array.from({ length: 10 })
      .map((e, idx) => idx)
      .forEach((number) => {
        expect(isIncreasingNumberV2(number)).toBe(false);
      });
  });
  test("should return false when n is not an increasing number", () => {
    [11, 22, 33, 44, 55555, 121, 120, 1273].forEach((number) => {
      expect(isIncreasingNumberV2(number)).toBe(false);
    });
  });
  test("should return true when n is an increasing number", () => {
    [12, 123, 12345, 3456].forEach((number) => {
      expect(isIncreasingNumberV2(number)).toBe(true);
    });
  });
});



describe("isIncreasingNumber(n)", () => {
  test("should return false when n is not a number", () => {
    expect(isIncreasingNumber("abc")).toBe(false);
    expect(isIncreasingNumber([])).toBe(false);
    expect(isIncreasingNumber(null)).toBe(false);
  });
  test("should return false when n < 0", () => {
    expect(isIncreasingNumber(-1)).toBe(false);
    expect(isIncreasingNumber(-2)).toBe(false);
    expect(isIncreasingNumber(-3)).toBe(false);
  });
  test("should return false when n > 1000000", () => {
    expect(isIncreasingNumber(1000001)).toBe(false);
    expect(isIncreasingNumber(1000002)).toBe(false);
    expect(isIncreasingNumber(1000003)).toBe(false);
  });
  test("should return false when n < 9", () => {
    Array.from({ length: 10 })
      .map((e, idx) => idx)
      .forEach((number) => {
        expect(isIncreasingNumber(number)).toBe(false);
      });
  });
  test("should return false when n is not an increasing number", () => {
    [11, 22, 33, 44, 55555, 121, 120, 1273].forEach((number) => {
      expect(isIncreasingNumber(number)).toBe(false);
    });
  });
  test("should return true when n is an increasing number", () => {
    [12, 123, 12345, 3456].forEach((number) => {
      expect(isIncreasingNumber(number)).toBe(true);
    });
  });
});