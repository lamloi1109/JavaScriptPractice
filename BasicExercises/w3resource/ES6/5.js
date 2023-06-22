// Write a JavaScript program to target a given value in a nested JSON object based on the given key.

export function dig(nestedObj, key) {
  if (nestedObj == null || typeof nestedObj !== 'object' || typeof key !== 'string') {
    return undefined;
  }

  for (const k of Object.keys(nestedObj)) {
    if (typeof nestedObj[k] === 'object') {
      return dig(nestedObj[k], key);
    }
    if (k === key) {
      return nestedObj[k];
    }
  }
  return undefined;
}

const data = {
  level1: {
    level2: {
      level3: 'some data',
    },
  },
};

const dog = {
  status: 'success',
  message: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg',
};
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));
