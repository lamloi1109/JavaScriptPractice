// Ðếm số từ có độ dài lớn hơn n
// Viết hàm countWords(wordList, n) để đếm xem có bao nhiều từ có độ dài lớn hơn hoặc bằng n

function isValidWord(word, number) {
  return typeof word === 'string' && word.length >= number;
}

export function countWords(wordList, number) {
  if (!Array.isArray(wordList) || wordList.length === 0 || typeof number !== 'number' || number < 0)
    return 0;

  let count = 0;

  for (let index = 0; index < wordList.length; index++) {
    const word = wordList[index];
    if (isValidWord(word, number)) count++;
  }
  return count;
}

export function countWordsV2(wordList, number) {
  if (!Array.isArray(wordList) || wordList.length === 0 || typeof number !== 'number' || number < 0)
    return 0;

  return wordList.reduce((acc, curr) => {
    if (isValidWord(curr, number)) {
      acc++;
    }
    return acc;
  }, 0);
}

export function countWordsV3(wordList, number) {
  if (!Array.isArray(wordList) || wordList.length === 0 || typeof number !== 'number' || number < 0)
    return 0;

  return wordList.filter((word) => isValidWord(word, number)).length;
}
