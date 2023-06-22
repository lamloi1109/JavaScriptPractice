// 9. Write a JavaScript program to calculate the days left before Christmas.
// sub: christmas - current day
function calculateTheDaysLeftBeforeChristmas() {
  const date = new Date();
  const christmasDate = new Date(date.getFullYear(), 11, 24);
  const DAY_PER_MILLISECOND = 1000 * 60 * 60 * 24;
  const diffDay = christmasDate - date;
  console.log(Math.round(diffDay / DAY_PER_MILLISECOND));
}
calculateTheDaysLeftBeforeChristmas();
console.log(1000 * 60 * 60 * 24);
