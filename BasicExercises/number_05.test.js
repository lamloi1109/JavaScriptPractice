import { isPerfectSquare, isPerfectSquareV2 } from "./number_05";
// Kiểm tra số chính phương
// Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
// 0 < n < 100000
// Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
// Trả về true nếu là số chính phương, ngược lại trả về false.
// Ví dụ: 4, 9, 25, 36 là các số chính phương

// n is not a number
// n < 0
// n > 100000
describe("isPerfectSquare(n)", () => {
  test("should return false when n is not a number ", () => {
    [{}, "dsad", [], undefined, null].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });
  test("should return false when n < 0 ", () => {
    [-1, -2, -3].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });
  test("should return false when n > 100000 ", () => {
    [1000000, 1000002].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });
  test("should return false when n is not a perfect square number ", () => {
    [12].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });
  test("should return true when n is a perfect square number ", () => {
    [1, 4, 9, 16, 25, 36].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(true);
    });
  });
});
describe("isPerfectSquareV2(n)", () => {
    test("should return false when n is not a number ", () => {
      [{}, "dsad", [], undefined, null].forEach((number) => {
        expect(isPerfectSquareV2(number)).toBe(false);
      });
    });
    test("should return false when n < 0 ", () => {
      [-1, -2, -3].forEach((number) => {
        expect(isPerfectSquareV2(number)).toBe(false);
      });
    });
    test("should return false when n > 100000 ", () => {
      [1000000, 1000002].forEach((number) => {
        expect(isPerfectSquareV2(number)).toBe(false);
      });
    });
    test("should return false when n is not a perfect square number ", () => {
      [12].forEach((number) => {
        expect(isPerfectSquareV2(number)).toBe(false);
      });
    });
    test("should return true when n is a perfect square number ", () => {
      [1, 4, 9, 16, 25, 36].forEach((number) => {
        expect(isPerfectSquareV2(number)).toBe(true);
      });
    });
  });