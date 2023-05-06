import { fillPath, fillPathV2 } from "./string_07";
// Thay thế params thành value tương ứng
// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.

describe("fillPath(path, params)", () => {
  test("should return undefined when path or params are not a string or obj", () => {
    [{}, NaN, null, undefined].forEach((path) => {
      expect(fillPath(path, {})).toBe(undefined);
    });
    ["Dsada", 1212, 0, NaN].forEach((path) => {
      expect(fillPath("Đsds", path)).toBe(undefined);
    });
  });
  test("should return undefined when path or params length are 0", () => {
    expect(fillPath("", {})).toBe(undefined);
  });

  test("should return undefined params are not in path", () => {
    expect(fillPath("/products/:productId", { productIdd: 123 })).toBe(
      undefined
    );
  });

  test("should return path afer replace params", () => {
    expect(fillPath("/products/:productId", { productId: 123 })).toBe(
      "/products/123"
    );

    expect(
      fillPath("/categories/:categoryId/products/:productId", {
        categoryId: 1,
        productId: 2,
      })
    ).toBe("/categories/1/products/2");
    expect(
      fillPath("/categories/:categoryId/products/:productId", {
        productId: 2,
      })
    ).toBe('/categories/:categoryId/products/2');
  });
});

describe("fillPathV2(path, params)", () => {
  test("should return undefined when path or params are not a string or obj", () => {
    [{}, NaN, null, undefined].forEach((path) => {
      expect(fillPathV2(path, {})).toBe(undefined);
    });
    ["Dsada", 1212, 0, NaN].forEach((path) => {
      expect(fillPathV2("Đsds", path)).toBe(undefined);
    });
  });
  test("should return undefined when path or params length are 0", () => {
    expect(fillPathV2("", {})).toBe(undefined);
  });

  test("should return undefined params are not in path", () => {
    expect(fillPathV2("/products/:productId", { productIdd: 123 })).toBe(
      undefined
    );
  });

  test("should return path afer replace params", () => {
    expect(fillPathV2("/products/:productId", { productId: 123 })).toBe(
      "/products/123"
    );

    expect(
      fillPathV2("/categories/:categoryId/products/:productId", {
        categoryId: 1,
        productId: 2,
      })
    ).toBe("/categories/1/products/2");
    expect(
      fillPathV2("/categories/:categoryId/products/:productId", {
        productId: 2,
      })
    ).toBe('/categories/:categoryId/products/2');
  });
});
