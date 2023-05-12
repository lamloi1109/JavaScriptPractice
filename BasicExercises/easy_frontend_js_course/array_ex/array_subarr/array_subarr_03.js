// Kiểm tra mảng a có phải là mảng con của mảng b
// Viết hàm isSubArray(a, b) để kiểm tra xem a có phải là mảng con của b không?
// Nếu a là mảng rỗng thì luôn trả về true.
// Nếu a có độ dài lớn hơn b thì luôn trả về false.
// Trả về true nếu toàn bộ mảng a nằm trong mảng b theo đúng thứ tự của từng phần tử trong mảng a.

export function isSubArray(a, b) {
  if (!Array.isArray(a)) return false;
  if (a.length === 0) return true;

  if (!Array.isArray(b) || b.length === 0) return false;

  return !a.find((number) => !b.includes(number));
}

export function isSubArrayV2(a, b) {
  if (!Array.isArray(a)) return false;
  if (a.length === 0) return true;

  if (!Array.isArray(b) || b.length === 0) return false;

  return a.filter((number) => !b.includes(number)).length > 0 ? false : true;
}

export function isSubArrayV3(a, b) {
  if (!Array.isArray(a)) return false;
  if (a.length === 0) return true;

  if (!Array.isArray(b) || b.length === 0) return false;

  for (let index = 0; index < a.length; index++) {
    const number = a[index];
    if (!b.includes(number)) return false;
  }
  return true;
}

console.log(isSubArray([], [1, 2]));
