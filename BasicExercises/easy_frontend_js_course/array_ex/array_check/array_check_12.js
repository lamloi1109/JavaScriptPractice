// Kiểm tra mảng có số fibonaci nhỏ hơn 100 không?
// Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số
// fibonaci nhỏ hơn 100 không?
// Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết
// fibonaci là gì thì đọc ở đây nhé
// Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không? Trả về
// true nếu có, ngược lại trả về false

function isFibonaciNumber(number) {
  if (number === 0 || number === 1) {
    return true;
  }
  let fibonaciList = [0, 1];
  const MAX_NUM = 100;
  let i = 2;
  while (fibonaciList[i - 1] < MAX_NUM) {
    if (fibonaciList[i - 1] === number) {
      return true;
    }
    fibonaciList[i] = fibonaciList[i - 1] + fibonaciList[i - 2];
    i++;
  }
  return false;
}

// numberList is empty
// numberList is not an array
// numberList does have fibonaci number
// fibonaciNumber > 100
// numberList has fibonaci number and  fibonaci number < 100

export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return false;
  }
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isFibonaciNumber(number)) return true;
  }
  return false;
}

export function hasFibonaciNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return false;
  }
  for (let number of numberList) {
    if (isFibonaciNumber(number)) return true;
  }
  return false;
}

export function hasFibonaciNumberV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return false;
  }
  let result = false;
  numberList.forEach((number) => {
    if (isFibonaciNumber(number)) result = true;
  });
  return result;
}

export function hasFibonaciNumberV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return false;
  }

  return !!numberList.find(isFibonaciNumber);
}

export function hasFibonaciNumberV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return false;
  }

  return numberList.findIndex(isFibonaciNumber) > -1;
}

export function hasFibonaciNumberV6(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return false;
  }

  return numberList.some(isFibonaciNumber);
}
