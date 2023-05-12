import {
  findLastNegativeOdd,
  findLastNegativeOddV2,
  findLastNegativeOddV3,
  findLastNegativeOddV4,
  findLastNegativeOddV5,
  findLastNegativeOddV6,
} from "./array_find_04";
// Tìm số âm lẻ cuối cùng trong mảng
// Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList

// NumberList does not have negative number
// NumberList does not have even numbers
// NumberList has negative number odd
describe("findLastNegativeOdd(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOdd(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have negative number", () => {
    expect(findLastNegativeOdd([1, 2, 3, 4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have negative odd number", () => {
    expect(findLastNegativeOdd([-2, -4, -6, -8])).toBe(undefined);
  });

  it("should return correct if numberList has negative odd number", () => {
    expect(findLastNegativeOdd([1, -3, -2, -5, -8])).toBe(-5);
  });
});

describe("findLastNegativeOddV2(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOddV2(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastNegativeOddV2([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have negative number", () => {
    expect(findLastNegativeOddV2([1, 2, 3, 4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have negative odd number", () => {
    expect(findLastNegativeOddV2([-2, -4, -6, -8])).toBe(undefined);
  });

  it("should return correct if numberList has negative odd number", () => {
    expect(findLastNegativeOddV2([1, -3, -2, -5, -8])).toBe(-5);
  });
});

describe("findLastNegativeOddV3(numberList)", () => {
    it("should return undefined if numberList is not an array", () => {
      expect(findLastNegativeOddV3(3213)).toBe(undefined);
    });
  
    it("should return undefined if numberList is empty array", () => {
      expect(findLastNegativeOddV3([])).toBe(undefined);
    });
    it("should return undefined if numberList does not have negative number", () => {
      expect(findLastNegativeOddV3([1, 2, 3, 4])).toBe(undefined);
    });
  
    it("should return undefined if numberList does not have negative odd number", () => {
      expect(findLastNegativeOddV3([-2, -4, -6, -8])).toBe(undefined);
    });
  
    it("should return correct if numberList has negative odd number", () => {
      expect(findLastNegativeOddV3([1, -3, -2, -5, -8])).toBe(-5);
    });
  });
  
describe("findLastNegativeOddV4(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOddV4(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastNegativeOddV4([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have negative number", () => {
    expect(findLastNegativeOddV4([1, 2, 3, 4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have negative odd number", () => {
    expect(findLastNegativeOddV4([-2, -4, -6, -8])).toBe(undefined);
  });

  it("should return correct if numberList has negative odd number", () => {
    expect(findLastNegativeOddV4([1, -3, -2, -5, -8])).toBe(-5);
  });
});

describe("findLastNegativeOddV5(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOddV5(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastNegativeOddV5([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have negative number", () => {
    expect(findLastNegativeOddV5([1, 2, 3, 4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have negative odd number", () => {
    expect(findLastNegativeOddV5([-2, -4, -6, -8])).toBe(undefined);
  });

  it("should return correct if numberList has negative odd number", () => {
    expect(findLastNegativeOddV5([1, -3, -2, -5, -8])).toBe(-5);
  });
});

describe("findLastNegativeOddV6(numberList)", () => {
  it("should return undefined if numberList is not an array", () => {
    expect(findLastNegativeOddV6(3213)).toBe(undefined);
  });

  it("should return undefined if numberList is empty array", () => {
    expect(findLastNegativeOddV6([])).toBe(undefined);
  });
  it("should return undefined if numberList does not have negative number", () => {
    expect(findLastNegativeOddV6([1, 2, 3, 4])).toBe(undefined);
  });

  it("should return undefined if numberList does not have negative odd number", () => {
    expect(findLastNegativeOddV6([-2, -4, -6, -8])).toBe(undefined);
  });

  it("should return correct if numberList has negative odd number", () => {
    expect(findLastNegativeOddV6([1, -3, -2, -5, -8])).toBe(-5);
  });
});
