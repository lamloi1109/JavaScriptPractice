// Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

// statisticsWords('easy frontend easy')
// should return an object like this:
// { easy: 2, frontend: 1 }

// words are not string
// words.length === 0
// return obj

// reduce
export function statisticsWords(str) {
  if (typeof str !== "string" || str.length === 0) return {};

  let strSplit = str.split(" ");
  return strSplit.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
}

export function statisticsWordsV2(str) {
  if (typeof str !== "string" || str.length === 0) return {};

  let strSplit = str.split(" ");
  let result = {};
  for (let index = 0; index < strSplit.length; index++) {
    const element = strSplit[index];
    result[strSplit[index]] = result[strSplit[index]] + 1 || 1;
  }
  return result;
}
// for of
// for each