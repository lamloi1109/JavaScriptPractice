// Write a program which tells the number of days in a month.
function toProPerCase(words){
    words = words.toLowerCase();
    words = words.replace(words[0],words[0].toUpperCase());
    return words;
}

console.log(toProPerCase('loi'));

function getNumberDayOfMonth(m) {
  let months = [
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];
  m = toProPerCase(m);
  if(!months.includes(m)) return  -1;

  let obj = {
    September: 30,
    October: 31 ,
    November: 30,
    December: 31,
    January: 31 ,
    February: 28,
    March: 31 ,
    April: 30,
    May: 31,
    July: 31 ,
    June: 30,
    August: 31,
  };

  return obj[m];
}

console.log(getNumberDayOfMonth('FEbruary'));

function checkLeapYear(year) {
    if( year < 0) return null;

    return (year % 400 === 0) || ((year % 4 === 0) && ((year % 100 !== 0))); 
}

console.log(checkLeapYear(2023));