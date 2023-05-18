// Bài 87: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000

// Delegate
function factorial(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

function findN() {
  let i = 2;
  while (10000 > factorial(i)) {
    i++;
  }

  return i;
}

console.log(findN());
