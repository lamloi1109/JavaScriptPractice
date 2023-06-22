// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

// determine = Xác định
// equivalent = tương đương

export function compareTwoObject(obj1, obj2) {
  if (obj1 == null || obj2 == null || typeof obj1 != 'object' || typeof obj2 != 'object') {
    return undefined;
  }

  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return true;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (!Object.hasOwnProperty.call(obj2, key)) {
      return false;
    }

    if (
      typeof obj1[key] === 'object' &&
      typeof obj2[key] === 'object' &&
      !compareTwoObject(obj1[key], obj2[key])
    ) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

export function compareTwoObjectV2(obj1, obj2) {
  if (obj1 == null || obj2 == null || typeof obj1 != 'object' || typeof obj2 != 'object') {
    return undefined;
  }
  return Object.keys(obj2).every((key) => {
    if (!obj1.hasOwnProperty(key)) {
      return false;
    }
    if (
      typeof obj1[key] === 'object' &&
      typeof obj2[key] === 'object' &&
      compareTwoObjectV2(obj1[key], obj2[key])
    ) {
      return false;
    }
    return obj1[key] === obj2[key];
  });
}

export function cloneObject(obj) {
  if (obj == null || typeof obj != 'object') {
    return undefined;
  }
  return Object.keys(obj).reduce((cloneObj, key) => {
    if (typeof obj[key] === 'object') {
      cloneObj[key] = cloneObject(cloneObj);
    }
    cloneObj[key] = obj[key];
    return cloneObj;
  }, {});
}
