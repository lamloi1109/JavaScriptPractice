const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];
// Find a union b
const c = [...a, ...b];
const unionSet = new Set(c);
console.log(unionSet);
// Find a intersection b
const setB = new Set(b);
const intersectionC = a.filter((number) => setB.has(number));
console.log(intersectionC);
// Find a with b
const unionList = [...unionSet];
const intersectionSet = new Set(intersectionC);
console.log(unionList);
const aWithB = unionList.filter((number) => !intersectionSet.has(number));
console.log(aWithB);
