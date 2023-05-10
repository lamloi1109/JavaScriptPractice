// Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// 0 < n < 100000
// Trả về true nếu là số nguyên tố, ngược lại trả về false.
// Định nghĩa về số nguyên tố
// Số nguyên tố là tập hợp các số tự nhiên >1, chia hết cho 1 và chính nó.
// Hoặc hiểu một cách đơn giản, những số tự nhiên nào lớn hơn 1, không chia được cho số nào khác ngoài số 1
// và chính số đó thì đó là số nguyên tố.

// n is not a number -> false
// n < 0 -> false
// n > 100000 -> false
// n < 2 -> false
// n === 2 -> true
// n is not a prime number. n % x === 0 With x !== 1 && x !== n

export function isPrimeNumber(number) {
  if (typeof number !== "number" || number < 0 || number > 100000 || number < 2)
    return false;
  if (number === 2) return true;
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }
  return true;
}

console.log(isPrimeNumber(4));