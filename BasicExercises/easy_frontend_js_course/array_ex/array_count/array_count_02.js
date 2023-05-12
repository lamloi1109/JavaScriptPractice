// Ðếm số mà nó nhỏ hơn số liền trước của nó
// Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng
// liền trước của nó
export function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;

  for (let index = 1; index < numberList.length; index++) {
    const beforeNumber = numberList[index - 1];
    const afterNumber = numberList[index];
    if (beforeNumber > afterNumber) count++;
  }

  return count;
}

export function countNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;
    // acc is before number
    // curr is after number
    // Đối với reduce trong trường hợp chúng ta không truyền vào option args khi đó
    // acc chính là phần tử đầu tiên trong mảng và curr là phần tử thứ hai

  numberList.reduce((acc, curr) => {
    acc > curr && count++;
    return curr;
  });

  return count;
}
