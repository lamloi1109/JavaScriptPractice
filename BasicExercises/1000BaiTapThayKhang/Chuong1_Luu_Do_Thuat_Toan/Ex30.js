// Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không

// Khái niệm số nguyên dương n
// Khái niệm số hoàn thiện -> perfectNumber -> Tổng ước nguyên dương bằng chính nó

export function isPerfectNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return undefined;

  let sum = 0;

  for (let index = 1; index < number; index++) {
    if (number % index === 0) sum += index;
  }

  return sum === number;
}
