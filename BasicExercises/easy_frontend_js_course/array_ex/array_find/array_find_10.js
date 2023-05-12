// Tìm vị trí của sản phẩm có mã code là = abc
// Viết hàm findProductByCode(productList, code) để tìm ra vị trí product có mã sản phẩm bằng với code.
export function findProductByCode(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;

  if (typeof code !== 'string') return -1;

  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];
    if (product.code === code) {
      return index;
    }
  }
  return -1;
}

export function findProductByCodeV2(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;

  if (typeof code !== 'string') return -1;

  return productList.findIndex((product) => product.code === code);
}
