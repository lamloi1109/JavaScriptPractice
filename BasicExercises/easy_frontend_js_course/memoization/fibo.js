function fibo(n) {
  if (n <= 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}
console.time();
console.log('dont use memoization', fibo(41));
console.timeEnd();

const memo = [];

function fiboUsingMemoization(n, memo) {
  if (memo[n] != null) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fiboUsingMemoization(n - 1, memo) + fiboUsingMemoization(n - 2, memo);
  return memo[n];
}
console.time();
console.log('using memoization', fiboUsingMemoization(41, memo));
console.timeEnd();
