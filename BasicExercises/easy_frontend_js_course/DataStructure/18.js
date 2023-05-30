// Lấy danh sách các từ khác nhau trong câu
export function getUniqueWordList(string) {
  if (string === '') {
    return [];
  }

  const toNormalCase = (str) =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map((x) => x.toLowerCase());

  const wordList = toNormalCase(string);

  return [...new Set(wordList)];
}

export function getUniqueWordListV2(string) {
  if (string === '') {
    return [];
  }

  const toNormalCase = (str) =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map((x) => x.toLowerCase());

  const wordList = toNormalCase(string);
  const map = new Map();
  const uniqueList = [];
  wordList.forEach((word) => {
    if (!map.has(word)) {
      map.set(word, word);
      uniqueList.push(word);
    }
  });
  return uniqueList;
}

console.log(getUniqueWordList('mot mot hai hai ba ba bon nam sau'));
