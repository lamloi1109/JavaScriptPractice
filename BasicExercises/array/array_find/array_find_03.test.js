import {
  findFirstPositiveEven,
  findFirstPositiveEvenV2,
  findFirstPositiveEvenV4,
  findFirstPositiveEvenV5,
  findFirstPositiveEvenV6,

} from "./array_find_03";
// Tìm số dương chẵn đầu tiên trong mảng
// Viết hàm findFirstPositiveEven(numberList) để tìm ra số dương chẵn đầu tiên trong mảng numberList

// NumberList does not have positive number
// NumberList does not have even numbers
// NumberList has positive number even
describe("findFirstPositiveEven(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findFirstPositiveEven(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have positive number", () => {
    expect(findFirstPositiveEven([-1, -2, -3, -4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have positive even number", () => {
    expect(findFirstPositiveEven([1, 3, 5, 7])).toBe(undefined);
  });

  it("should return correct if numberList has positive even number", () => {
    expect(findFirstPositiveEven([1, 3, 2, 5, 8])).toBe(2);
  });
});

describe("findFirstPositiveEvenV4(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findFirstPositiveEvenV4(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findFirstPositiveEvenV4([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have positive number", () => {
    expect(findFirstPositiveEvenV4([-1, -2, -3, -4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have positive even number", () => {
    expect(findFirstPositiveEvenV4([1, 3, 5, 7])).toBe(undefined);
  });

  it("should return correct if numberList has positive even number", () => {
    expect(findFirstPositiveEvenV4([1, 3, 2, 5, 8])).toBe(2);
  });
});

describe("findFirstPositiveEvenV5(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findFirstPositiveEvenV5(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findFirstPositiveEvenV5([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have positive number", () => {
    expect(findFirstPositiveEvenV5([-1, -2, -3, -4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have positive even number", () => {
    expect(findFirstPositiveEvenV5([1, 3, 5, 7])).toBe(undefined);
  });

  it("should return correct if numberList has positive even number", () => {
    expect(findFirstPositiveEvenV5([1, 3, 2, 5, 8])).toBe(2);
  });
});

describe("findFirstPositiveEvenV6(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findFirstPositiveEvenV6(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findFirstPositiveEvenV6([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have positive number", () => {
    expect(findFirstPositiveEvenV6([-1, -2, -3, -4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have positive even number", () => {
    expect(findFirstPositiveEvenV6([1, 3, 5, 7])).toBe(undefined);
  });

  it("should return correct if numberList has positive even number", () => {
    expect(findFirstPositiveEvenV6([1, 3, 2, 5, 8])).toBe(2);
  });
});
