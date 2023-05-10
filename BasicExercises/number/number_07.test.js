import { isSymetricNumber, isSymetricNumberV2, isSymetricNumberV3 } from "./number_07";
// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false
describe("isSymetricNumber(number)", () => {
  test("should return false when n is not a number ", () => {
    [{}, "dsad", [], undefined, null].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });
  test("should return false when n <= 10", () => {
    [-1, -2, -3].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });
  test("should return false when n > 1000000", () => {
    [1000001, 2000000, 3000000].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });
  test("should return false when n is not symetric number", () => {
    [10, 12, 123, 12312].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });
  test("should return true when n is a symetric number", () => {
    [12321].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(true);
    });
  });
});

describe("isSymetricNumberV2(number)", () => {
    test("should return false when n is not a number ", () => {
      [{}, "dsad", [], undefined, null].forEach((number) => {
        expect(isSymetricNumberV2(number)).toBe(false);
      });
    });
    test("should return false when n <= 10", () => {
      [-1, -2, -3].forEach((number) => {
        expect(isSymetricNumberV2(number)).toBe(false);
      });
    });
    test("should return false when n > 1000000", () => {
      [1000001, 2000000, 3000000].forEach((number) => {
        expect(isSymetricNumberV2(number)).toBe(false);
      });
    });
    test("should return false when n is not symetric number", () => {
      [10, 12, 123, 12312].forEach((number) => {
        expect(isSymetricNumberV2(number)).toBe(false);
      });
    });
    test("should return true when n is a symetric number", () => {
      [12321].forEach((number) => {
        expect(isSymetricNumberV2(number)).toBe(true);
      });
    });
  });

  describe("isSymetricNumberV3(number)", () => {
    test("should return false when n is not a number ", () => {
      [{}, "dsad", [], undefined, null].forEach((number) => {
        expect(isSymetricNumberV3(number)).toBe(false);
      });
    });
    test("should return false when n <= 10", () => {
      [-1, -2, -3].forEach((number) => {
        expect(isSymetricNumberV3(number)).toBe(false);
      });
    });
    test("should return false when n > 1000000", () => {
      [1000001, 2000000, 3000000].forEach((number) => {
        expect(isSymetricNumberV3(number)).toBe(false);
      });
    });
    test("should return false when n is not symetric number", () => {
      [10, 12, 123, 12312].forEach((number) => {
        expect(isSymetricNumberV3(number)).toBe(false);
      });
    });
    test("should return true when n is a symetric number", () => {
      [12321].forEach((number) => {
        expect(isSymetricNumberV3(number)).toBe(true);
      });
    });
  });