import {
  findSecondLargestNumber,
  findSecondLargestNumberV2,
  findSecondLargestNumberV3,
  findSecondLargestNumberV4
} from "./array_find_05";
// Tìm số lớn thứ 2 trong mảng
// Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList

describe("findSecondLargestNumber(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findSecondLargestNumber(3213)).toBe(undefined);
  });

  it("should return undefined if numberList length < 2", () => {
    expect(findSecondLargestNumber([1])).toBe(undefined);
  });

  it("should return undefined if numberList does not have secondLargesNumber", () => {
    expect(findSecondLargestNumber([10, 10, 10])).toBe(undefined);
  });

  it("should return secondLargesNumber if numberList has secondLargesNumber", () => {
    expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
  });
});

describe("findSecondLargestNumberV2(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findSecondLargestNumberV2(3213)).toBe(undefined);
  });

  it("should return undefined if numberList length < 2", () => {
    expect(findSecondLargestNumberV2([1])).toBe(undefined);
  });

  it("should return undefined if numberList does not have secondLargesNumber", () => {
    expect(findSecondLargestNumberV2([10, 10, 10])).toBe(undefined);
  });

  it("should return secondLargesNumber if numberList has secondLargesNumber", () => {
    expect(findSecondLargestNumberV2([1, 2, 3, 4])).toBe(3);
  });
});

describe("findSecondLargestNumberV3(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findSecondLargestNumberV3(3213)).toBe(undefined);
  });

  it("should return undefined if numberList length < 2", () => {
    expect(findSecondLargestNumberV3([1])).toBe(undefined);
  });

  it("should return undefined if numberList does not have secondLargesNumber", () => {
    expect(findSecondLargestNumberV3([10, 10, 10])).toBe(undefined);
  });

  it("should return secondLargesNumber if numberList has secondLargesNumber", () => {
    expect(findSecondLargestNumberV3([1, 2, 3, 4])).toBe(3);
  });
});

describe("findSecondLargestNumberV4(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findSecondLargestNumberV4(3213)).toBe(undefined);
  });

  it("should return undefined if numberList length < 2", () => {
    expect(findSecondLargestNumberV4([1])).toBe(undefined);
  });

  it("should return undefined if numberList does not have secondLargesNumber", () => {
    expect(findSecondLargestNumberV4([10, 10, 10])).toBe(undefined);
  });

  it("should return secondLargesNumber if numberList has secondLargesNumber", () => {
    expect(findSecondLargestNumberV4([1, 2, 3, 4])).toBe(3);
  });
});
