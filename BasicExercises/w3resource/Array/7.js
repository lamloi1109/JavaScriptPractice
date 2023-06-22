// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort(arr1));

function partition(arr, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = arr[mid];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(arr, left, right) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  if (left >= right) {
    return arr;
  }
  const pivotPosition = partition(arr, left, right);
  quickSort(arr, left, pivotPosition - 1);
  quickSort(arr, pivotPosition, right);
  return arr;
}
console.log(quickSort(arr1, 0, arr1.length - 1));
