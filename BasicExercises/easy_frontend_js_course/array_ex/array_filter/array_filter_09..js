// Tìm tất cả sản phẩm thuộc dòng iphone và còn hàng trong kho
// Viết hàm findAllIphones(productList) để tìm ra tất cả các product có tên chứa chữ iphone (ko phân biệt
// hoa thường) và vẫn còn hàng trong kho (amount > 0)

function isIphone(product) {
  return product.name.toLowerCase().includes('iphone') && product.amount > 0;
}

// for i
// for of
// for each
export function findAllIphones(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  const iphoneList = [];

  productList.forEach((product) => {
    if (isIphone(product)) iphoneList.push(product);
  });

  return iphoneList;
}

export function findAllIphonesV2(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter(isIphone);
}

export function findAllIphonesV3(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.reduce((acc, curr) => {
    if (isIphone(curr)) acc.push(curr);
    return acc;
  }, []);
}
