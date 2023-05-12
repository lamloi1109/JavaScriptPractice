import {
  findMinPositive,
  findMinPositiveV2,
  findMinPositiveV3,
} from "./array_find_01";
// Kẻ lười biếng không có quyền than vẫn
// Kém cỏi củng được miễn là đừng lười biếng nữa
// Xử lý mảng tìm kiếm phần tử

// Tìm số dương nhỏ nhất trong mảng
// Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng

// numberList is not an array
// numberList is empty array
// number is not positive number
// number is positive => return min

describe("findMinPositive(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findMinPositive({})).toBe(undefined);
  });

  test("should return undefined if numberList is empty array", () => {
    expect(findMinPositive([])).toBe(undefined);
  });

  test("should return undefined if numberList does have positive number", () => {
    expect(findMinPositive([-1, -2, -3])).toBe(undefined);
  });

  test("should return min number if numberList has positive number", () => {
    expect(findMinPositive([-1, 2, 4, 6])).toBe(2);
  });
});

describe("findMinPositiveV2(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findMinPositiveV2({})).toBe(undefined);
  });

  test("should return undefined if numberList is empty array", () => {
    expect(findMinPositiveV2([])).toBe(undefined);
  });

  test("should return undefined if numberList does have positive number", () => {
    expect(findMinPositiveV2([-1, -2, -3])).toBe(undefined);
  });

  test("should return min number if numberList has positive number", () => {
    expect(findMinPositiveV2([-1, 2, 4, 6])).toBe(2);
  });
});

describe("findMinPositiveV3(numberList)", () => {
  test("should return undefined if numberList is not an array", () => {
    expect(findMinPositiveV3({})).toBe(undefined);
  });

  test("should return undefined if numberList is empty array", () => {
    expect(findMinPositiveV3([])).toBe(undefined);
  });

  test("should return undefined if numberList does have positive number", () => {
    expect(findMinPositiveV3([-1, -2, -3])).toBe(undefined);
  });

  test("should return min number if numberList has positive number", () => {
    expect(findMinPositiveV3([-1, 2, 4, 6])).toBe(2);
  });
});
