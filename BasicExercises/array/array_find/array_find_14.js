// Tìm sản phầm đầu tiên có free ship
// Viết hàm findProductHavingFreeShip(productList) để tìm ra sản phẩm đầu tiên có free ship.

export function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList) || productList.length === 0) {
    return {};
  }
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];
    if (product.isFreeShip) return product;
  }
  return {};
}

export function findProductHavingFreeShipV2(productList) {
  if (!Array.isArray(productList) || productList.length === 0) {
    return {};
  }
  return productList.find((product) => product.isFreeShip) ?? {};
}
