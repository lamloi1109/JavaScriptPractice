// Tìm tất cả sản phẩm có hỗ trợ free ship
// Viết hàm findAllProducts(productList) để tìm ra tất cả product có isFreeShip=true

// for i
// for of
// for each
export function findAllProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  let freeShipProductList = [];

  productList.forEach((product) => {
    if (product.isFreeShip === true) {
      freeShipProductList.push(product);
    }
  });

  return freeShipProductList;
}

// filter
export function findAllProductsV2(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter((product) => product.isFreeShip);
}
