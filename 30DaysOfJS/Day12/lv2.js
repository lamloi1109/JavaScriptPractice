// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
function tenMostFrequentWords(txt, number) {
  if (typeof txt !== 'string' || txt === '') {
    return undefined;
  }
  const pattern = /\b[a-zA-Z]+\b/g;
  const wordList = txt.match(pattern);
  const statistic = {};
  return Object.entries(
    wordList.reduce((statistic, word) => {
      statistic[word] = statistic[word] + 1 || 1;
      return statistic;
    }, statistic)
  )
    .map((item) => ({ word: item[0], count: item[1] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, number);
}
console.log(tenMostFrequentWords(paragraph, 10));
