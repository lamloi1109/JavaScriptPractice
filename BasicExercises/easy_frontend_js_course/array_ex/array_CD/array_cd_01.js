// Thêm một phần tử tại vị trí k
// Viết hàm insert(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr
// Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng
// Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng

export function insert(arr, newItem, k) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (typeof k !== 'number') return arr;

  const sizeOfArr = arr.length;
  if (k > sizeOfArr) {
    arr.push(newItem);
  }

  if (k <= 0) {
    arr.unshift(newItem);
  }

  if (k <= sizeOfArr && k > 0) {
    arr.splice(k, 0, newItem);
  }

  return arr;
}
