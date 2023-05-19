//Bài 159: Cho mảng 1 chiều các số thực, hãy tìm giá trị đầu tiên lớn hơn giá trị 2003. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về  -1

function findFirstNumberGreaterThan2003(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const targetNumber = 2003;

  return numberList.find((number) => number > targetNumber) ?? -1;
}

console.log(findFirstNumberGreaterThan2003([1, 2, 3, 4, 2005]));
