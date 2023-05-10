import {
  hasOddNumberDivisibleBy3,
  hasOddNumberDivisibleBy3V2,
  hasOddNumberDivisibleBy3V3,
} from "./array_check_02";
// Kiểm tra có số lẻ và chia hết cho 3 không
// Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
// chia hết cho 3 không?
describe("hasOddNumberDivisibleBy3(numberList)", () => {
  test("should return false when numberList is empty array", () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
  });
  test("should return false when number does not have odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3([2, 4, 8])).toBe(false);
  });
  test("should return true when number has odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3([2, 4, 3])).toBe(true);
  });
});

describe("hasOddNumberDivisibleBy3V2(numberList)", () => {
  test("should return false when numberList is empty array", () => {
    expect(hasOddNumberDivisibleBy3V2([])).toBe(false);
  });
  test("should return false when number does not have odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3V2([2, 4, 8])).toBe(false);
  });
  test("should return true when number has odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3V2([2, 4, 3])).toBe(true);
  });
});

describe("hasOddNumberDivisibleBy3V3(numberList)", () => {
  test("should return false when numberList is empty array", () => {
    expect(hasOddNumberDivisibleBy3V3([])).toBe(false);
  });
  test("should return false when number does not have odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3V3([2, 4, 8])).toBe(false);
  });
  test("should return true when number has odd number divisible by 3", () => {
    expect(hasOddNumberDivisibleBy3V3([2, 4, 3])).toBe(true);
  });
});
