// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
export function isPerfectNumber(number) {
  // check args
  if (typeof number !== "number" || number < 1 || number > 1000) return false;
  let remainingNumber = 0;
  for (let index = 1; index < number - 1; index++) {
    if (number % index === 0) remainingNumber = remainingNumber + index;
    if (remainingNumber === number) return true;
  }  
  return false;
}
