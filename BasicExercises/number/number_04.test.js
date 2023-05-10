import { isPrimeNumber } from './number_04';
// Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// 0 < n < 100000
// Trả về true nếu là số nguyên tố, ngược lại trả về false.

// n < 0 -> false
// n > 100000 -> false
// n < 2 -> false
// n === 2 -> true
// n is not a prime number. n % x === 0 With x !== 1 && x !== n

describe('isPrimeNumber(number)', () => {
  // n is not a number -> false
  test('shoud return false when n is not a number', () => {
    [{}, 'dsad', []].forEach((number) => {
      expect(isPrimeNumber(number)).toBe(false);
    });
  });

  // n < 0 -> false
  test('shoud return false when n < 0', () => {
    Array.from({ length: 5 })
      .map((number, index) => index - 6)
      .forEach((number) => {
        expect(isPrimeNumber(number)).toBe(false);
      });
  });

  // n > 100000 -> false
  test('shoud return false when n > 100000', () => {
    Array.from({ length: 5 })
      .map((number, index) => index + 100001)
      .forEach((number) => {
        expect(isPrimeNumber(number)).toBe(false);
      });
  });
  // n < 2 -> false
  test('shoud return false when n < 2', () => {
    Array.from({ length: 5 })
      .map((number, index) => index - 3)
      .forEach((number) => {
        expect(isPrimeNumber(number)).toBe(false);
      });
  });
  // n === 2 true
  test('shoud return true when n === 2', () => {
    expect(isPrimeNumber(2)).toBe(true);
  });
  // n is not a prime number. n % x === 0 With x !== 1 && x !== n

  test('shoud return correct if number is prime number', () => {
    [3, 5, 7, 11, 13].forEach((number) => {
      expect(isPrimeNumber(number)).toBe(true);
    });
  });

  test('shoud return false if number is not prime number', () => {
    [4, 6, 9].forEach((number) => {
      expect(isPrimeNumber(number)).toBe(false);
    });
  });
});
