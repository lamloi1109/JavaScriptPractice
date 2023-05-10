// Thống kê ký tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của key

// str is not a string
// str length is 0
// return {character: count}
// should return an object like this:
// { a: 2, b: 1, c: 2, space: 3 }

export function statisticsCharacters(words) {
  if (typeof words !== "string" || words.length === 0) return {};
  let strSplit = words.split("");
  let result = {};
  for (let index = 0; index < strSplit.length; index++) {
    const element = strSplit[index] === " " ? "space" : strSplit[index];
    result[element] = result[element] + 1 || 1;
  }
  return result;
}

export function statisticsCharactersV2(words) {
  if (typeof words !== "string" || words.length === 0) return {};
  let strSplit = words.split("");
  let result = {};
  for (let element of words) {
    const key = element === " " ? "space" : element;
    result[key] = result[key] + 1 || 1;
  }
  return result;
}

export function statisticsCharactersV3(words) {
  if (typeof words !== "string" || words.length === 0) return {};
  let strSplit = words.split("");
  let result = {};
  strSplit.forEach((element) => {
    let key = element === " " ? "space" : element;
    result[key] = result[key] + 1 || 1;
  });
  return result;
}

export function statisticsCharactersV4(words) {
  if (typeof words !== "string" || words.length === 0) return {};
  return words
    .split("")
    .filter((str) => str !== "")
    .reduce((acc, curr) => {
      let key = curr === " " ? "space" : curr;
      acc[key] = acc[key] + 1 || 1;
      return acc;
    }, {});
}
