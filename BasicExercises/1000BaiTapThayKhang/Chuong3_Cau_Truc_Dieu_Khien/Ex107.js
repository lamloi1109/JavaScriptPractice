// Bài 107: Viết hàm tính S = CanBacN(x)
// https://pheptinh.com/khai-can-bac-n.html
// x ^ (1 / n)

function CanBacN(n, x) {
  return Math.pow(x, 1 / n);
}

console.log(CanBacN(3, 16));
