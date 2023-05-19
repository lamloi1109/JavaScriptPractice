// Bài 124: Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không

function hasEvenNumberLessThan2004(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const targetNumber = 2004;

  return numberList.some((number) => number > 0 && number % 2 === 0 && number < targetNumber);
}

console.log(hasEvenNumberLessThan2004([2005, 2006, 2007, 2002]));
