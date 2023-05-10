// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false

// n is not a number
// n <= 10
// n > 1000000
// Chuyển sang String -> reverse -> so sánh

export function isSymetricNumber(number) {
  if (typeof number !== "number" || number <= 10 || number > 100000)
    return false;
  let remaining = number;
  let cpNumber = 0;
  while (remaining > 0) {
    let lastNumber = remaining % 10;
    if (cpNumber + lastNumber === remaining) {
      return true;
    }
    cpNumber = (lastNumber + cpNumber) * 10;

    remaining = remaining - lastNumber;
    if (cpNumber === remaining) {
      return true;
    }
    remaining = remaining / 10;
  }
  return false;
}

export function isSymetricNumberV2(number) {
  if (typeof number !== "number" || number <= 10 || number > 100000)
    return false;
  let remaining = number.toString();
  let i = 0;
  let j = remaining.length - 1;
  while (i < j) {
    if (remaining[i] !== remaining[j]) return false;
    i++;
    j--;
  }
  return true;
}

export function isSymetricNumberV3(number) {
  if (typeof number !== "number" || number <= 10 || number > 100000)
    return false;
  let remaining = number.toString();
  // -> array
  let remainingSpilit = remaining.split("");
  remaining = remainingSpilit.reverse().join("");
  // coercion
  // number vs string -> number vs number
  return remaining == number;
}
