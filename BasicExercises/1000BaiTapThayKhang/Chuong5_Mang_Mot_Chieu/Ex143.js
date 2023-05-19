// Bài 143: Viết hàm tìm số chẵn đầu tiên trong mảng các số nguyên. Nếu mảng không có giá trị chẵn thì trả về  -1

function findFirstEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.find((number) => number > 0 && number % 2 === 0) ?? -1;
}
