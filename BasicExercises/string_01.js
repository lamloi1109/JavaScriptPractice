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
  if (typeof words !== "string" || words.length === 0) {
    return 0;
  }
  words = words.trim();
  let count = 0;
  for (const word of words) {
    if (word === " ") count++;
  }

  return count + 1;
}

export function countWordsV2(words) {
  if (typeof words !== "string" || words.length === 0) {
    return 0;
  }
  words = words.trim();
  let count = 0;
  let wordsSpilit = words.split("");
  wordsSpilit.forEach((element) => element === " " && count++);
  return count + 1;
}


export function countWordsV3(words) {
  if (typeof words !== "string" || words.length === 0) {
    return 0;
  }
  words = words.trim();
  let wordsSpilit = words.split(" ");
  return wordsSpilit.length;
}