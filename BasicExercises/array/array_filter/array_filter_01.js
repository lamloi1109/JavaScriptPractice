// Liệt kê các số trong khoảng [a, b]
// Viết hàm generateNumberInRange(a, b) để tạo ra một mảng các số từ a đến b (có bao gồm a và b)
export function generateNumberInRange(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || a >= b) return [];

  return Array.from({ length: b })
    .map((number, index) => index + 1)
    .filter((number) => number >= a);
}

export function generateNumberInRangeV2(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || a >= b) return [];

  let numbers = [];
  for (let index = a; index <= b; index++) {
    numbers.push(index);
  }
  return numbers;
}
