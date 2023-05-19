// Bài 157: Cho mảng 1 chiều các số thực, hãy tìm đoạn [a, b] sao cho đoạn này chứa tất cả các giá trị trong mảng

export function findAtoB(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  // Create uniqueList
  const uniqueList = [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (!uniqueList.includes(number)) {
      uniqueList.push(number);
    }
  }

  // find A index
  // find B index
  // return [a,..., b]

  let aIndex = numberList.indexOf(uniqueList[1]) !== -1 ? numberList.indexOf(uniqueList[1]) : 1;

  for (let index = 0; index < numberList.length; index++) {
    if (uniqueList.length === 0) {
      return numberList.slice(aIndex - 1, index);
    }
    if (uniqueList.includes(numberList[index])) {
      let uIndex = uniqueList.findIndex((number) => number === numberList[index]);
      uniqueList.splice(uIndex, 1);
    }
  }

  return numberList;
}

console.log(findAtoB([1, 1, 2, 2, 3, 1, 2, 3, 1, 1, 1, 2, 2]));

// ~~! lẠc đề =))) 
// Chỉ cần tìm min và max 