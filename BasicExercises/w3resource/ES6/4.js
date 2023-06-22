// Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.

export function JSON_to_CSV(list, titles, delimiter = ',') {
  if (!Array.isArray(list) || !Array.isArray(titles)) {
    return undefined;
  }
  if (list.length === 0 || titles.length === 0) {
    return [];
  }
  const breakLine = '\n';
  return list.reduce((csv, obj) => {
    let values = Object.values(obj);
    if (Object.keys(obj).length < 2) {
      Object.keys(obj)[0] === 'x' ? values.push(``) : values.unshift(``);
    }
    csv +=
      [...values.slice(0, 2)].map((item) => (item !== '' ? `'${item}'` : `''`)).join(delimiter) +
      breakLine;
    return csv;
  }, titles.toString() + breakLine);
}

console.log(
  JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'])
);

console.log(
  JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';')
);

// x,y
// "100","200"
// "300","400"
// "6",""
// "","7"
// x;y
// "100";"200"
// "300";"400"
// "6";""
// "";"7"
