import {
  hasEvenNumberGreaterThanN,
  hasEvenNumberGreaterThanNV2,
  hasEvenNumberGreaterThanNV3,
} from "./array_check_01";
// Xử lý mảng (array): kiểm tra phần tử có trong mảng không?
// ARRAY-CHECK-01: Kiểm tra có số chẵn lớn hơn n trong mảng không
// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không?
describe("hasEvenNumberGreaterThanN(numberList, number)", () => {
  test("should return false when numberList is empty array", () => {
    expect(hasEvenNumberGreaterThanN([], 1)).toBe(false);
  });
  test("should return false when number is not a number", () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3], "Đấ")).toBe(false);
  });

  test("should return false when numberList does not have even number greater than n", () => {
    expect(hasEvenNumberGreaterThanN([3, 5, 7], 3)).toBe(false);
  });

  test("should return true when numberList has even number less than n", () => {
    expect(hasEvenNumberGreaterThanN([3, 2, 5, 7], 3)).toBe(false);
  });

  test("should return true when numberList has even number greater than n", () => {
    expect(hasEvenNumberGreaterThanN([3, 4, 5, 7], 3)).toBe(true);
  });
});

describe("hasEvenNumberGreaterThanNV2(numberList, number)", () => {
  test("should return false when numberList is empty array", () => {
    expect(hasEvenNumberGreaterThanNV2([], 1)).toBe(false);
  });
  test("should return false when number is not a number", () => {
    expect(hasEvenNumberGreaterThanNV2([1, 2, 3], "Đấ")).toBe(false);
  });

  test("should return false when numberList does not have even number greater than n", () => {
    expect(hasEvenNumberGreaterThanNV2([3, 5, 7], 3)).toBe(false);
  });

  test("should return true when numberList has even number less than n", () => {
    expect(hasEvenNumberGreaterThanNV2([3, 2, 5, 7], 3)).toBe(false);
  });

  test("should return true when numberList has even number greater than n", () => {
    expect(hasEvenNumberGreaterThanNV2([3, 4, 5, 7], 3)).toBe(true);
  });
});

describe("hasEvenNumberGreaterThanNV3(numberList, number)", () => {
    test("should return false when numberList is empty array", () => {
      expect(hasEvenNumberGreaterThanNV3([], 1)).toBe(false);
    });
    test("should return false when number is not a number", () => {
      expect(hasEvenNumberGreaterThanNV3([1, 2, 3], "Đấ")).toBe(false);
    });
  
    test("should return false when numberList does not have even number greater than n", () => {
      expect(hasEvenNumberGreaterThanNV3([3, 5, 7], 3)).toBe(false);
    });
  
    test("should return true when numberList has even number less than n", () => {
      expect(hasEvenNumberGreaterThanNV3([3, 2, 5, 7], 3)).toBe(false);
    });
  
    test("should return true when numberList has even number greater than n", () => {
      expect(hasEvenNumberGreaterThanNV3([3, 4, 5, 7], 3)).toBe(true);
    });
  });
  