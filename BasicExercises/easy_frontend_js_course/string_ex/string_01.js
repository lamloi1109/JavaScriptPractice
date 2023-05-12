// Ðếm số từ có trong câu
// Viêt hàm countWords(str) để đếm số từ có trong str.
// Ví dụ: countWords('easy frontend') --> 2

// words is not string
// words.length === 0
// return countWords

// Loop qa word đếm số space (Khoảng ' ') => số khoảng trắng + 1
// for i
// for of
// for each

export function countWords(words) {
  if (typeof words !== "string" || words === '') {
    return 0;
  }
  words = words.split(" ").filter((str) => str !== "");
  return words.length;
}

export function countWordsV2(words) {
  if (typeof words !== "string" || words.length === 0) {
    return 0;
  }
  words = words.trim();
  let count = 0;
  words
    .split(" ")
    .filter((str) => str !== "")
    .forEach((element) => element !== "" && count++);
  return count;
}

console.log(countWords(" easy   frontend    easy   "));

export function countWordsV3(words) {
  if (typeof words !== "string" || words.length === 0) {
    return 0;
  }
  return words.split(" ").filter((str) => str !== "").length;
}
