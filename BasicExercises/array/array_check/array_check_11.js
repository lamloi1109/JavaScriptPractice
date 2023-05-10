// Kiểm tra mang có đối xứng không
// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
// Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
// Mảng đối xứng phải có ít nhất một phần tử

// 2 con trỏ
export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  if (numberList.length === 1) return true;

  let i = 0;
  let j = numberList.length - 1;

  while (i < j) {
    if (numberList[i] !== numberList[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
// converse to number -> isSymmetricNumber
function isSymmetricNumber(number) {
  if (typeof number !== "number" || number <= 10 || number > 100000)
    return false;
  let remaining = number;
  let cpNumber = 0;
  while (remaining > 0) {
    let lastNumber = remaining % 10;
    if (cpNumber + lastNumber === remaining) {
      return true;
    }
    cpNumber = (lastNumber + cpNumber) * 10;

    remaining = remaining - lastNumber;
    if (cpNumber === remaining) {
      return true;
    }
    remaining = remaining / 10;
  }
  return false;
}
export function isSymmetricListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  if (numberList.length === 1) return true;
  let number = Number(numberList.join(""));
  console.log(numberList);
  return isSymmetricNumber(number);
}
