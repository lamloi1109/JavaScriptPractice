// Thay thế params thành value tương ứng
// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.

// Return undefined
// path || params are not a string
// path || params length are 0
// Key trong params ko tồn tại trong path
export function fillPath(path, params) {
  if (typeof path !== "string" || typeof params !== "object") return undefined;
  if (path.length === 0 || Object.keys(params).length === 0) return undefined;
  let pKey = path.split("/");
  for (const key in params) {
    if (!pKey.some((k) => k === ":" + key)) return undefined;
    path = path.replace(":" + key, params[key]);
  }
  return path;
}

export function fillPathV2(path, params) {
  if (typeof path !== "string" || typeof params !== "object") return undefined;
  if (path.length === 0 || Object.keys(params).length === 0) return undefined;
  let pKey = path.split("/");

  let result;

  Object.keys(params).forEach((key) => {
    if (!pKey.some((k) => k === ":" + key)) return (result = undefined);
    path = path.replace(":" + key, params[key]);
    result = path;
  });
  return result;
}
console.log(
  fillPathV2("/categories/:categoryId/products/:productId", {
    categoryId: 1,
    productId: 2,
  })
);
