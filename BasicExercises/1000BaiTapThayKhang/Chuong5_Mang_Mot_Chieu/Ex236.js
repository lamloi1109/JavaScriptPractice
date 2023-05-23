// Bài 236(*): Cho 2 mảng a, b. Hãy cho biết số lần xuất hiện của mảng a trong mảng b

function countAInB(arrA, arrB) {
  if (!Array.isArray(arrA) || arrA.length === 0) {
    return undefined;
  }
  if (!Array.isArray(arrB) || arrB.length === 0) {
    return undefined;
  }

  let count = 0;
  let uniqueList = [];

  for (let index = 0; index < arrA.length; index++) {
    const number = arrA[index];
    if (!uniqueList.includes(number)) {
      uniqueList.push(number);
    }
  }

  let tmpArr = [...uniqueList];

  for (let index = 0; index < arrB.length; index++) {
    if (uniqueList.length === 0) {
      count++;
      uniqueList = [...tmpArr];
    }
    if (uniqueList.includes(arrB[index])) {
      let uIndex = uniqueList.findIndex((number) => number === arrB[index]);
      uniqueList.splice(uIndex, arrB[index]);
    }
  }
  return count;
}

console.log(countAInB([1, 2, 3], [1, 2, 3, 1, 2, 3, 4, 1, 5, 2, 6, 3]));
