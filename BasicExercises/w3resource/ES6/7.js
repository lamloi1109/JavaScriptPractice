// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

// Original:

export function pull(list1, ...list2) {
  if (!Array.isArray(list1) || list1.length === 0 || !Array.isArray(list2) || list2.length === 0) {
    return undefined;
  }

  const pulled = list1.filter((char) => !list2.includes(char));

  list1.length = 0;

  pulled.forEach((char) => {
    list1.push(char);
  });

  return list1;
}

let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));
let arra2 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));

// ["b","b"]
// ["a","c","a","c"]

// Iterates over all own properties of an object, running a callback for each one

const tips_forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
console.log(tips_forOwn({ foo: 'bar', x: 5 }, v => console.log(v)));
