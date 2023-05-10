// Dãy số fibonaci nhỏ hơn n
// Viết hàm generateFibonaci(n) để tạo ra mảng các số fibonaci nhỏ hơn n (0 < n < 1000)
// Fibonaci là dãy số tự nhiên có 2 phần tử đầu tiên là 0 và 1.
// Phân tử tiếp theo sẽ bằng tổng 2 phần tử trước đó:
// f(n) = f(n - 1) + f(n - 2)
import { generateFibonaci } from './array_filter_03.js';

describe('generateFibonaci(n)', () => {
  it('should return [] if n is not a number', () => {
    expect(generateFibonaci('Dsadsa')).toStrictEqual([]);
  });

  it('should return [] if number === 0', () => {
    expect(generateFibonaci(0)).toStrictEqual([]);
  });

  it('should return correct list if number > 0', () => {
    expect(generateFibonaci(5)).toStrictEqual([0, 1, 1, 2, 3, 5]);
    expect(generateFibonaci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
