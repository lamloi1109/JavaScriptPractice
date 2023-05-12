// Dãy số fibonaci nhỏ hơn n
// Viết hàm generateFibonaci(n) để tạo ra mảng các số fibonaci nhỏ hơn n (0 < n < 1000)
// Fibonaci là dãy số tự nhiên có 2 phần tử đầu tiên là 0 và 1.
// Phân tử tiếp theo sẽ bằng tổng 2 phần tử trước đó:
// f(n) = f(n - 1) + f(n - 2)
export function generateFibonaci(number) {
  if (typeof number !== 'number' || number <= 0) return [];

  let numberListFibonaci = [0, 1];
  let index = 2;
  while (numberListFibonaci[index - 1] < number) {
    if (numberListFibonaci[index - 1] + numberListFibonaci[index - 2] > number)
      return numberListFibonaci;
    numberListFibonaci[index] = numberListFibonaci[index - 1] + numberListFibonaci[index - 2];
    index++;
  }
  
  return numberListFibonaci;
}

console.log(generateFibonaci(5));
