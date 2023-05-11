// Xoá một phần tử tại vị trí k
// Viết hàm remove(arr, k, n) để xoá n phần tử ra khỏi mảng arr kể từ vị trị k (zero based)
// Nếu k < 0 hoặc k >= arr.length thì trả về mảng hiện tại.
// Nếu k hợp lệ thì remove n phần tử kể tử vị trí k và trả về mảng kết quả.
// Nếu n không truyền vào thì remove tới cuối mảng.
// Lưu ý không được làm thay đổi mảng arr truyền vào.
export function remove(arr, k, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  if (n === undefined) return [];

  if (k < 0 || k >= arr.length) return arr;
  const newArr = [...arr];
  newArr.splice(k, n);
  return newArr;
}
