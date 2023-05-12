import { hasTwoDigitsWithSum, hasTwoDigitsWithSumV2 } from "./number_09";
// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true
describe("hasTwoDigitWithSum(n,sum)", () => {
  test("should return false when n is not a number ", () => {
    [{}, "dsad", [], undefined, null].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 10)).toBe(false);
    });
  });
  test("should return false when n < 0", () => {
    Array.from({ length: 9 })
      .map((num, index) => index)
      .forEach((number) => {
        expect(hasTwoDigitsWithSum(number, 10)).toBe(false);
      });
  });
  test("should return false when n > 1000000", () => {
    [1000001, 2000000, 3000000].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 10)).toBe(false);
    });
  });

  test("should return false when sum n !== sum", () => {
    [10].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 10)).toBe(false);
    });
  });

  test("should return true when sum n === sum", () => {
    [11].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 2)).toBe(true);
    });
  });

});

describe("hasTwoDigitWithSumV2(n,sum)", () => {
    test("should return false when n is not a number ", () => {
      [{}, "dsad", [], undefined, null].forEach((number) => {
        expect(hasTwoDigitsWithSumV2(number, 10)).toBe(false);
      });
    });
    test("should return false when n < 0", () => {
      Array.from({ length: 9 })
        .map((num, index) => index)
        .forEach((number) => {
          expect(hasTwoDigitsWithSumV2(number, 10)).toBe(false);
        });
    });
    test("should return false when n > 1000000", () => {
      [1000001, 2000000, 3000000].forEach((number) => {
        expect(hasTwoDigitsWithSumV2(number, 10)).toBe(false);
      });
    });
  
    test("should return false when sum n !== sum", () => {
      [10].forEach((number) => {
        expect(hasTwoDigitsWithSumV2(number, 10)).toBe(false);
      });
    });
  
    test("should return true when sum n === sum", () => {
      [11].forEach((number) => {
        expect(hasTwoDigitsWithSumV2(number, 2)).toBe(true);
      });
    });
  
  });
  