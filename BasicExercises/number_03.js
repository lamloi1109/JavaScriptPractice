// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false
export function isIncreasingNumberByDistance(number, distacnce) {
  // Check args
  if (
    typeof number !== "number" ||
    typeof distacnce !== "number" ||
    number < 10 ||
    number > 1000000 ||
    distacnce < 0 ||
    distacnce > 5
  ) {
    return false;
  }
  let remainingNumber = number;
  let prevNumber = 10;
  while (remainingNumber > 0) {
    let lastNumber = remainingNumber % 10;
    if (lastNumber >= prevNumber) {
      return false;
    }
    if (prevNumber < 10 && prevNumber - lastNumber > distacnce) {
      return false;
    }
    prevNumber = lastNumber;
    remainingNumber = Math.trunc(remainingNumber / 10);
  }
  return true;
}
export function isIncreasingNumberByDistanceV2(number, distacnce) {
  // Check args
  if (
    typeof number !== "number" ||
    typeof distacnce !== "number" ||
    number < 10 ||
    number > 1000000 ||
    distacnce < 0 ||
    distacnce > 5
  ) {
    return false;
  }
  let numberStringList = number.toString();
  for (let index = 1; index < numberStringList.length; index++) {
    if (numberStringList[index] < numberStringList[index - 1]) return false;
    if (numberStringList[index] - numberStringList[index - 1] > distacnce)
      return false;
  }
  return true;
}
    