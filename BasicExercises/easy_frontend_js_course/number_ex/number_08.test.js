import { isDivisibleBy10, isDivisibleBy10V2 } from "./number_08";
// Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// n is not a number
// n < 0 || n > 1000000
// sum % 10 !== 0
describe("Name of the group", () => {
  test("should return false when n is not a number ", () => {
    [{}, "dsad", [], undefined, null].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(false);
    });
  });
  test("should return false when n < 0", () => {
    Array.from({ length: 9 }).map((num, index) => index).forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(false);
    });
  });
  test("should return false when n > 1000000", () => {
    [1000001, 2000000, 3000000].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(false);
    });
  });

  test("should return false when n % 10 !== 0", () => {
    [12, 13, 21, 33, 11, 44].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(false);
    });
  });

  test("should return false when n % 10 === 0", () => {
    [1234,123455].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(true);
    });
  });
});

describe("isDivisibleBy10V2(number)", () => {
  test("should return false when n is not a number ", () => {
    [{}, "dsad", [], undefined, null].forEach((number) => {
      expect(isDivisibleBy10V2(number)).toBe(false);
    });
  });
  test("should return false when n <= 10", () => {
    Array.from({ length: 9 }).map((num, index) => index).forEach((number) => {
      expect(isDivisibleBy10V2(number)).toBe(false);
    });
  });
  test("should return false when n > 1000000", () => {
    [1000001, 2000000, 3000000].forEach((number) => {
      expect(isDivisibleBy10V2(number)).toBe(false);
    });
  });

  test("should return false when n % 10 !== 0", () => {
    [12, 13, 21, 33, 11, 44].forEach((number) => {
      expect(isDivisibleBy10V2(number)).toBe(false);
    });
  });

  test("should return false when n % 10 === 0", () => {
    [1234,123455].forEach((number) => {
      expect(isDivisibleBy10V2(number)).toBe(true);
    });
  });
});
