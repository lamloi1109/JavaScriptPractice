// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(str) {
  if (typeof str !== 'string' || str === '') {
    return undefined;
  }
  return str.replace(/%|@|\&|\$|\.|;|!|\?/g, '');
}
const cleanedText = cleanText(sentence);
console.log(cleanedText);

//  Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
function mostFrequentWords(cleanText) {
  if (typeof cleanText !== 'string' || cleanText === '') {
    return undefined;
  }
  const pattern = /\b[A-Za-z]+\b/g;
  const wordList = cleanText.match(pattern);
  const statisticWords = {};
  return Object.entries(
    wordList.reduce((statisticWords, word) => {
      statisticWords[word] = statisticWords[word] + 1 || 1;
      return statisticWords;
    }, statisticWords)
  )
    .map((word) => ({ word: word[0], count: word[1] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
}
console.log(mostFrequentWords(cleanedText));
