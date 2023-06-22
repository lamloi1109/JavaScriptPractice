// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
// january tháng một
// sunday chủ nhật
// between giữa

function findSundayInRange(toTime = 2014, fromTime = 2050) {
  if (toTime < 2014 || fromTime > 2050) {
    return undefined;
  }

  for (let index = toTime; index <= fromTime; index++) {
    const date = new Date(index, 0, 1);
    // console.log(date.get FullYear());
    //  0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid.
    if (date.getDay() === 0) {
      console.log(`1st January is being a sunday ${date.getFullYear()}`);
    }
  }
}

findSundayInRange(2014, 2050);
