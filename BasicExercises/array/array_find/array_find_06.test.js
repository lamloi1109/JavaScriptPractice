import {
  findLastPerfectSquare,
  findLastPerfectSquareV2,
  findLastPerfectSquareV3,
  findLastPerfectSquareV4,
} from "./array_find_06";
// Tìm số chính phương cuối cùng trong mảng
// Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng
// numberList

// numberList is not an array
// numberList is empty array
// numberList does not have perfect square number
// numberList has perfect square number

describe("findLastPerfectSquare(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastPerfectSquare(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
  });

  it("should return undefined if numberList does not have perfect square number", () => {
    expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
  });
  it("should return correct if numberList has perfect square number", () => {
    expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
  });
});

describe("findLastPerfectSquareV2(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastPerfectSquareV2(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastPerfectSquareV2([])).toBe(undefined);
  });

  it("should return undefined if numberList does not have perfect square number", () => {
    expect(findLastPerfectSquareV2([2, 3, 5])).toBe(undefined);
  });
  it("should return correct if numberList has perfect square number", () => {
    expect(findLastPerfectSquareV2([4, 16, 25, 36, 40])).toBe(36);
  });
});

describe("findLastPerfectSquareV3(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastPerfectSquareV3(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastPerfectSquareV3([])).toBe(undefined);
  });

  it("should return undefined if numberList does not have perfect square number", () => {
    expect(findLastPerfectSquareV3([2, 3, 5])).toBe(undefined);
  });
  it("should return correct if numberList has perfect square number", () => {
    expect(findLastPerfectSquareV3([4, 16, 25, 36, 40])).toBe(36);
  });
});


describe("findLastPerfectSquareV4(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastPerfectSquareV4(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastPerfectSquareV4([])).toBe(undefined);
  });

  it("should return undefined if numberList does not have perfect square number", () => {
    expect(findLastPerfectSquareV4([2, 3, 5])).toBe(undefined);
  });
  it("should return correct if numberList has perfect square number", () => {
    expect(findLastPerfectSquareV4([4, 16, 25, 36, 40])).toBe(36);
  });
});
