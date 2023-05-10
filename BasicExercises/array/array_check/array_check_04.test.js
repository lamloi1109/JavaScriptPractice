import { hasTruthy, hasTruthyV2, hasTruthyV3, hasTruthyV4, hasTruthyV5 } from "./array_check_04";
// Kiểm tra có giá trị Falsy nào trong mảng không
// Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị Falsy không?

describe("hasTruthy(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasTruthy([])).toBe(false);
  });
  test("should return true when array does not have TruThy", () => {
    expect(hasTruthy([true, ""])).toBe(true);
  });
  test("should return correct when array has TruThy", () => {
    expect(hasTruthy([false, 123])).toBe(true);
  });
});

describe("hasTruthyV2(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasTruthyV2([])).toBe(false);
  });
  test("should return true when array does not have TruThy", () => {
    expect(hasTruthyV2([true, ""])).toBe(true);
  });
  test("should return correct when array has TruThy", () => {
    expect(hasTruthyV2([false, 123])).toBe(true);
  });
});

describe("hasTruthyV3(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasTruthyV3([])).toBe(false);
  });
  test("should return true when array does not have TruThy", () => {
    expect(hasTruthyV3([true, ""])).toBe(true);
  });
  test("should return correct when array has TruThy", () => {
    expect(hasTruthyV3([false, 123])).toBe(true);
  });
});

describe("hasTruthyV4(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasTruthyV4([])).toBe(false);
  });
  test("should return true when array does not have TruThy", () => {
    expect(hasTruthyV4([true, ""])).toBe(true);
  });
  test("should return correct when array has TruThy", () => {
    expect(hasTruthyV4([false, 123])).toBe(true);
  });
});

describe("hasTruthyV5(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasTruthyV5([])).toBe(false);
  });
  test("should return true when array does not have TruThy", () => {
    expect(hasTruthyV5([true, ""])).toBe(true);
  });
  test("should return correct when array has TruThy", () => {
    expect(hasTruthyV5([false, 123])).toBe(true);
  });
});
