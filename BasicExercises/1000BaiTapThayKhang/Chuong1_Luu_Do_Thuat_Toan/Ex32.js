// Bài 32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không
// Số chính phương là gì -> Lấy căn bặc 2 ra số tự nhiên

export function isSquareNumber(number) {
  if (typeof number !== 'number') return undefined;

  const squareNumber = Math.sqrt(number) * 10;
  return squareNumber % 10 === 0;
}

console.log(isSquareNumber(9));
console.log(isSquareNumber(16));
console.log(isSquareNumber(4));
console.log(isSquareNumber(9));
