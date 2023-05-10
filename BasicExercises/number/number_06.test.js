import { isPerfectNumber } from "./number_06";
// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
describe("isPerfectNumber(number)", () => {
  test("should return false when n is not a number ", () => {
    [{}, "dsad", [], undefined, null].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });
  test("should return false when n < 11", () => {
    [-1, -2, -3].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });
  test("should return false when n > 1000 ", () => {
    [1004, 1002].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });
  test("should return false when n is not a perfect number   ", () => {
    [5, 7, 8, 9].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });

  test("should return false when n is not a perfect number   ", () => {
    [6, 28, 496].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(true);
    });
  });
});
