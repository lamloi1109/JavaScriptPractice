// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function getScores(score) {
  if (score < 0 || score > 100) return `OOP!`;

  if (score >= 90) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}

console.log(getScores(0));

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function getSeason(m) {
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
  if (!months.includes(m)) return "OOP!";

  let obj = {
    September: "Autumn",
    October: "Autumn",
    November: "Autumn",
    December: "Winter",
    January: "Winter",
    February: "Winter",
    March: "Spring",
    April: "Spring",
    May: "Spring",
    July: "Summer",
    June: "Summer",
    August: "Summer",
  };
  return obj[m];
}

console.log(getSeason("September"));

// Check if a day is weekend day or a working day. Your script will take day as an input.
function checkWeekend(d) {
    let days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    if(!days.includes(d)) return 'OOP!';

    return d === 'Sat' || d === 'Sun' ? `${d} is a Weekend.` : `${d} is a working day.` ;
}

console.log(checkWeekend('Mon'));