// Tìm sản phẩm đầu tiên có tên bắt đầu bằng chữ iphone (không phân biệt hoa thường)
// Viết hàm findFirstIPhone(productList) để tìm ra sản phẩm dòng IPhone đầu tiên

export function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return {};

  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];
    if (product.name.toLowerCase().startsWith('iphone')) return product;
  }
  return {};
}

export function findFirstIPhoneV2(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return {};

  return productList.find((product) => product.name.toLowerCase().startsWith('iphone')) ?? {};
}
