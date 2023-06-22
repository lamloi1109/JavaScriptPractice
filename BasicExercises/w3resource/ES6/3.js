// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

export function CSV_to_JSON(data, delimiter = ',') {
  if (typeof data !== 'string') {
    return undefined;
  }
  if (data === '') {
    return [];
  }

  const titles = data.split('\n').map((str) => str.split(delimiter))[0];

  const result = data
    .split('\n')
    .slice(1)
    .map((str) => str.split(delimiter))
    .map((arr) => {
      return arr.reduce((obj, item, index) => {
        obj[titles[index]] = item;
        return obj;
      }, {});
    });

  return result;
}

console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
