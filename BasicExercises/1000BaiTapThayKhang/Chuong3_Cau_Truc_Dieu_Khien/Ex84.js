// Bài 84: Viết chương trình giải và biện luận phương trình bậc nhất ax + b = 0

function equation1St(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a === 0) {
    return undefined;
  }

  const x = (-1 * b) / a;
  return x;
}

console.log(equation1St(2, 3));
