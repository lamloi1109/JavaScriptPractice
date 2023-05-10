import {
  isIncreasingNumberList,
  isIncreasingNumberListV2,
} from "./array_check_09";
// Kiểm tra mảng có tăng dần không
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// 1. Có ít nhất 2 phần tử.
// 2. Phần tử sau luôn lớn hơn p

// numberList is empty array
// numberList is not an array
// numberList is not in creasing number list
// numberList is in creasing number list

describe("isIncreasingNumberList(numberList)", () => {
  test("should false numberList is empty array", () => {
    expect(isIncreasingNumberList([])).toBe(false);
  });
  test("should false numberList is not an array", () => {
    expect(isIncreasingNumberList("Đá")).toBe(false);
  });
  test("should false numberList is not in creasing number list", () => {
    expect(isIncreasingNumberList([1, 1])).toBe(false);
    expect(isIncreasingNumberList([2, 1])).toBe(false);
    expect(isIncreasingNumberList([1, 2, 3, 1])).toBe(false);
  });

  test("should correct numberList is in creasing number list", () => {
    expect(isIncreasingNumberList([1, 2, 3, 4])).toBe(true);
  });
});

describe("isIncreasingNumberListV2(numberList)", () => {
  test("should false numberList is empty array", () => {
    expect(isIncreasingNumberListV2([])).toBe(false);
  });
  test("should false numberList is not an array", () => {
    expect(isIncreasingNumberListV2("Đá")).toBe(false);
  });
  test("should false numberList is not in creasing number list", () => {
    expect(isIncreasingNumberListV2([1, 1])).toBe(false);
    expect(isIncreasingNumberListV2([2, 1])).toBe(false);
    expect(isIncreasingNumberListV2([1, 2, 3, 1])).toBe(false);
  });

  test("should correct numberList is in creasing number list", () => {
    expect(isIncreasingNumberListV2([1, 2, 3, 4])).toBe(true);
  });
});
