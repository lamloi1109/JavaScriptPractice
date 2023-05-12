// Cho một mảng đã được sắp xếp tăng dần. Cho một số, nhờ bạn add vào mảng
// nhưng phải đảm bảo mảng vẫn đc sắp xếp tăng dần.
// Viết hàm insert(numberList, newNumber) để chèn newNumber vào mảng numberList sao cho mảng kết
// quả vẫn là tăng dần.
export function insert(numberList, newNumber) {
  if (!Array.isArray(numberList)) return [];

  if (numberList.length === 0) return [newNumber];

  // find index first number > newNumber is list
  const index = numberList.findIndex((number) => number >= newNumber);
  if (index === -1) {
    return [...numberList, newNumber];
  }
  
  const newNumberList = [...numberList];
  newNumberList.splice(index, 0, newNumber);
  return newNumberList;
}
