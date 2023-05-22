// Bài 193: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị trong mảng có dạng 3^k. Nếu mảng không có giá trị đó thì trả về 0

function isThreePowKForm(number) {
  if (number < 3) return false;
  while (number > 1) {
    if (number % 3 !== 0) {
      return false;
    }
    number = number / 3;
  }

  return true;
}

export function findAllValue(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.reduce((acc, number) => {
    if (isThreePowKForm(number)) {
      acc.push(number);
    }
    return acc;
  }, []);
}
