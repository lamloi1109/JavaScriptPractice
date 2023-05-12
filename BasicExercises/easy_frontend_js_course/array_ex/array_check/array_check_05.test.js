import { hasFalsy, hasFalsyV2, hasFalsyV3, hasFalsyV4, hasFalsyV5 } from "./array_check_05";
// Kiểm tra có giá trị Falsy nào trong mảng không
// Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị Falsy không?

describe("hasFalsy(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasFalsy([])).toBe(false);
  });
  test("should return true when array does not have Falsy", () => {
    expect(hasFalsy([true, ""])).toBe(true);
  });
  test("should return correct when array has Falsy", () => {
    expect(hasFalsy([false, 123])).toBe(true);
  });
});

describe("hasFalsyV2(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasFalsyV2([])).toBe(false);
  });
  test("should return true when array does not have Falsy", () => {
    expect(hasFalsyV2([true, ""])).toBe(true);
  });
  test("should return correct when array has Falsy", () => {
    expect(hasFalsyV2([false, 123])).toBe(true);
  });
});

describe("hasFalsyV3(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasFalsyV3([])).toBe(false);
  });
  test("should return true when array does not have Falsy", () => {
    expect(hasFalsyV3([true, ""])).toBe(true);
  });
  test("should return correct when array has Falsy", () => {
    expect(hasFalsyV3([false, 123])).toBe(true);
  });
});


describe("hasFalsyV4(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasFalsyV4([])).toBe(false);
  });
  test("should return true when array does not have Falsy", () => {
    expect(hasFalsyV4([true, ""])).toBe(true);
  });
  test("should return correct when array has Falsy", () => {
    expect(hasFalsyV4([false, 123])).toBe(true);
  });
});


describe("hasFalsyV5(array)", () => {
  test("should return false when array is empty", () => {
    expect(hasFalsyV5([])).toBe(false);
  });
  test("should return true when array does not have Falsy", () => {
    expect(hasFalsyV5([true, ""])).toBe(true);
  });
  test("should return correct when array has Falsy", () => {
    expect(hasFalsyV5([false, 123])).toBe(true);
  });
});
