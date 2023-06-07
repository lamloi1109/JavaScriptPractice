// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function recursionRange(list, number, counter) {
  if (counter <= 1) {
    return list;
  }
  list.push(number);
  number++;
  counter--;
  return recursionRange(list, number, counter);
}

export function range(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number' || min > max || min < 0) {
    return [];
  }

  const list = [];
  return recursionRange(list, min + 1, max - min);
}
console.log(range(2, 9));

export function rangeV2(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number' || min > max || min < 0) {
    return [];
  }

  if (max - min === 2) {
    return [min + 1];
  }
  let list = rangeV2(min, max - 1);
  list.push(max - 1);
  return list;
}
console.log(rangeV2(2, 9));
