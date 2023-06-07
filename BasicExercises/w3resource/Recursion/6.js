// 6. Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function calcFibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return calcFibonacci(n - 2) + calcFibonacci(n - 1);
}
console.log(calcFibonacci(8));

function getFibonacciSeries(number) {
  if (number === 1) {
    return [0, 1];
  }
  let fibonacciSeries = getFibonacciSeries(number - 1);
  fibonacciSeries.push(
    fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2]
  );
  return fibonacciSeries;
}
console.log(getFibonacciSeries(8));
