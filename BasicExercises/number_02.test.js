import { isDeCreasingNumber, isDeCreasingNumberV2 } from "./number_02";
// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
// 0 < n < 1000000
// Số giảm dần có ít nhất 2 chữ số
// Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần, ngược lại trả về false

// n < 10
// n > 1000000
// n is not a number
// n is not an decreasing number
// n is an decreasing number

describe("isDecreasingNumber(n) ", () => {
  test("should return false when n is not a number ", () => {
    [null, "dsadsa", ["dsa"], {}].forEach((n) => {
      expect(isDeCreasingNumber(n)).toBe(false);
    });
  });

  test("should return false when n < 10", () => {
    Array.from({ length: 10 })
      .map((e, idx) => idx)
      .forEach((n) => {
        expect(isDeCreasingNumber(n)).toBe(false);
      });
  });

  test("should return false when n is not a decreasing number", () => {
    [123, 12, 11, 3456, 5555].forEach((n) => {
      expect(isDeCreasingNumber(n)).toBe(false);
    });
  });
    test("should return true when n is a decreasing number", () => {
    [21,321,654321,987].forEach((n) => {
      expect(isDeCreasingNumber(n)).toBe(true);
    });
  });
});
describe("isDecreasingNumber(n) ", () => {
  test("should return false when n is not a number ", () => {
    [null, "dsadsa", ["dsa"], {}].forEach((n) => {
      expect(isDeCreasingNumberV2(n)).toBe(false);
    });
  });

  test("should return false when n < 10", () => {
    Array.from({ length: 10 })
      .map((e, idx) => idx)
      .forEach((n) => {
        expect(isDeCreasingNumberV2(n)).toBe(false);
      });
  });

  test("should return false when n is not a decreasing number", () => {
    [123, 12, 11, 3456, 5555].forEach((n) => {
      expect(isDeCreasingNumberV2(n)).toBe(false);
    });
  });
    test("should return true when n is a decreasing number", () => {
    [21,321,654321,987].forEach((n) => {
      expect(isDeCreasingNumberV2(n)).toBe(true);
    });
  });
});
