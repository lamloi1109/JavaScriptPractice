// Kiểm tra có sản phẩm nhỏ hơn giá cho trước và free ship không
// Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào free ship và giá nhỏ hơn price
// không?

function isFreeShip(product, price) {
  return product.isFreeShip && product.price < price;
}

// for i
export function hasFreeShip(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];
    if (isFreeShip(product, price)) {
      return true;
    }
  }
  return false;
}
// for each
export function hasFreeShipV2(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;
  let result = false;
  productList.forEach((product) => {
    if (isFreeShip(product, price)) result = true;
  });
  return result;
}
// for of
export function hasFreeShipV3(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  for (let product of productList) {
    if (isFreeShip(product, price)) {
      return true;
    }
  }

  return false;
}
// reduce
export function hasFreeShipV4(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  return productList.reduce((acc, curr) => {
    if (isFreeShip(curr, price)) acc = true;
    return acc;
  }, false);
}
// findIndex
export function hasFreeShipV5(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  return productList.findIndex((product) => isFreeShip(product, price)) > -1;
}
// find tượng tự với findIndex chỉ khác phần trả về. Dùng !! để converse về boolean
export function hasFreeShipV6(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  return !!productList.find((product) => isFreeShip(product, price)) > -1;
}
// filter

export function hasFreeShipV7(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  return productList.filter((product) => isFreeShip(product, price)).length > 0;
}
// some
export function hasFreeShipV8(productList, price) {
  if (
    !Array.isArray(productList) ||
    productList.length === 0 ||
    typeof price !== "number"
  )
    return false;

  return productList.some((product) => isFreeShip(product, price));
}
