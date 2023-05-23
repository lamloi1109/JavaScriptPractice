// Bài 229: Đếm số lượng các giá trị phân biệt có trong mảng

function countUniqueNumberInList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const uniqueNumber = [];

  numberList.forEach((number) => {
    if (!uniqueNumber.includes(number)) {
      uniqueNumber.push(number);
    }
  });
  return uniqueNumber.length;
}
