function isEvenRecursion(number) {
  if (!Number.isInteger(number)) {
    return undefined;
  }
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  return isEvenRecursion(number - 2);
}

console.log(isEvenRecursion(8));
console.log(isEvenRecursion(7));
