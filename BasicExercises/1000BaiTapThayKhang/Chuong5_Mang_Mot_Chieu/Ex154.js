// Bài 154: Hãy tìm vị trí giá trị âm nhỏ nhất trong mảng các số thực. Nếu mảng không có số âm thì trả về -1

function findMinNegativeFloatNumber(floatNumberList) {
  if (!Array.isArray(floatNumberList) || floatNumberList.length === 0) {
    return undefined;
  }

  return (
    floatNumberList.reduce((minNegativeFloatNumber, number) => {
      if (number % 2 === 0 && minNegativeFloatNumber > number) {
        minNegativeFloatNumber = number;
      }
    }, Number.MAX_SAFE_INTEGER) ?? -1
  );
}
