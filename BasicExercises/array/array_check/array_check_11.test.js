import { isSymmetricList, isSymmetricListV2 } from "./array_check_11";
// Kiểm tra mang có đối xứng không
// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
// Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
// Mảng đối xứng phải có ít nhất một phần tử

// numberList is empty Array
// numberList is not an Array
// numberList is not symmetricList
// numberList is symmetricList

describe("isSymmetricList(numberList)", () => {
  test("should return false if numberList is empty arr", () => {
    expect(isSymmetricList([])).toBe(false);
  });

  test("should return false if numberList is not an arr", () => {
    expect(isSymmetricList({})).toBe(false);
  });

  test("should return false if numberList is not symmetricList", () => {
    expect(isSymmetricList([1, 2])).toBe(false);
    expect(isSymmetricList([1, 2, 3])).toBe(false);
  });
  test("should return correct if numberList is symmetricList", () => {
    expect(isSymmetricList([1, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 3, 2, 1])).toBe(true);
  });
});

describe("isSymmetricListV2(numberList)", () => {
    test("should return false if numberList is empty arr", () => {
      expect(isSymmetricListV2([])).toBe(false);
    });
  
    test("should return false if numberList is not an arr", () => {
      expect(isSymmetricListV2({})).toBe(false);
    });
  
    test("should return false if numberList is not symmetricList", () => {
      expect(isSymmetricListV2([1, 2])).toBe(false);
      expect(isSymmetricListV2([1, 2, 3])).toBe(false);
    });
    test("should return correct if numberList is symmetricList", () => {
      expect(isSymmetricListV2([1, 2, 1])).toBe(true);
      expect(isSymmetricListV2([1, 2, 2, 1])).toBe(true);
      expect(isSymmetricListV2([1, 2, 3, 2, 1])).toBe(true);
    });
  });
  