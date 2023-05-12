// Kiểm tra có giá trị truthy nào trong mảng không
// Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?

// array is empty
// array does not have truthy value
// array has truthy value

export function hasTruthy(array) {
  if (!Array.isArray(array) || array.length === 0) return false;
  return array.some((e) => !!e);
}

export function hasTruthyV2(array) {
  if (!Array.isArray(array) || array.length === 0) return false;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element) return true;
  }
  return false;
}

export function hasTruthyV3(array) {
  if (!Array.isArray(array) || array.length === 0) return false;

  for (let element of array) {
    if (element) return true;
  }
  return false;
}

export function hasTruthyV4(array) {
  if (!Array.isArray(array) || array.length === 0) return false;

  let result = false;

  array.forEach((element) => {
    if (element) result = true;
  });

  return result;
}

export function hasTruthyV5(array) {
  if (!Array.isArray(array) || array.length === 0) return false;

  return array.reduce((acc, curr) => {
    if (curr) acc = true;
    return acc;
  }, false);
}
