// JavaScript: Converts a comma-separated values string to a 2D array

export function convertCSVToArray(data, delimiter = ',', omitFirstRow = false) {
  if (typeof data !== 'string') {
    return undefined;
  }
  if (data === '') {
    return [];
  }

  // 'a,b\nc,d'
  // 'a;b\nc;d', ';'
  // 'head1,head2\na,b\nc,d', ',', true

  return data
    ?.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map((str) => str.split(delimiter));
}
console.log(convertCSVToArray('a,b\nc,d', ','));
