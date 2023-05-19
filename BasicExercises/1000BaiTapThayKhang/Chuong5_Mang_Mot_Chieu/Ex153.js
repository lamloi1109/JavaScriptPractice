// Bài 153: Hãy tìm giá trị chẵn nhỏ nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số chẵn thì trả về -1

function findMinEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return (
    numberList.reduce((minEvenNumber, number) => {
      if (number % 2 === 0 && minEvenNumber > number) {
        minEvenNumber = number;
      }
    }, Number.MAX_SAFE_INTEGER) ?? -1
  );
}
