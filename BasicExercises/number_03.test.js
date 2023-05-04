import { isIncreasingNumberByDistance, isIncreasingNumberByDistanceV2 } from "./number_03";
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false
describe("isIncreasingNumberByDistance(n, x)", () => {
  test("should return false when n and x is not a number ", () => {
    [[], {}, "dsadsa"].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, number)).toBe(false);
    });
  });
  test("should return false when n < 10", () => {
    Array.from({ length: 10 })
      .map((number, index) => index)
      .forEach((number) => {
        expect(isIncreasingNumberByDistance(number, 2)).toBe(false);
      });
  });
  test("should return false when x > 5 || x < 0", () => {
    Array.from({ length: 10 })
      .map((number, index) => index + 6)
      .forEach((number) => {
        expect(isIncreasingNumberByDistance(123, number)).toBe(false);
      });
    Array.from({ length: 10 })
      .map((number, index) => index - 10)
      .forEach((number) => {
        expect(isIncreasingNumberByDistance(123, number)).toBe(false);
      });
  });
  test("should return false when n is not an increasing number and distance is x", () => {
    [21, 321, 54321].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 1)).toBe(false);
    });
  });
  test("should return false when distancec > x", () => {
    expect(isIncreasingNumberByDistance(125, 2)).toBe(false);
  });
  test("should return true when n is an increasing number and distance < x", () => {
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(1234, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(12345, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(1235, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(13, 2)).toBe(true);
  });
});

describe("isIncreasingNumberByDistanceV2(n, x)", () => {
  test("should return false when n and x is not a number ", () => {
    [[], {}, "dsadsa"].forEach((number) => {
      expect(isIncreasingNumberByDistanceV2(number, number)).toBe(false);
    });
  });
  test("should return false when n < 10", () => {
    Array.from({ length: 10 })
      .map((number, index) => index)
      .forEach((number) => {
        expect(isIncreasingNumberByDistanceV2(number, 2)).toBe(false);
      });
  });
  test("should return false when x > 5 || x < 0", () => {
    Array.from({ length: 10 })
      .map((number, index) => index + 6)
      .forEach((number) => {
        expect(isIncreasingNumberByDistanceV2(123, number)).toBe(false);
      });
    Array.from({ length: 10 })
      .map((number, index) => index - 10)
      .forEach((number) => {
        expect(isIncreasingNumberByDistanceV2(123, number)).toBe(false);
      });
  });
  test("should return false when n is not an increasing number and distance is x", () => {
    [21, 321, 54321].forEach((number) => {
      expect(isIncreasingNumberByDistanceV2(number, 1)).toBe(false);
    });
  });
  test("should return false when distancec > x", () => {
    expect(isIncreasingNumberByDistanceV2(125, 2)).toBe(false);
  });
  test("should return true when n is an increasing number and distance < x", () => {
    expect(isIncreasingNumberByDistanceV2(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(1234, 1)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(12345, 1)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(1235, 2)).toBe(true);
    expect(isIncreasingNumberByDistanceV2(13, 2)).toBe(true);
  });
});
