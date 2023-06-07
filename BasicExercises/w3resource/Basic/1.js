// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Today: Ngày hôm nay
// Từ vựng các ngày trong tuần
// Thứ 2 - Monday
// Thứ 3 - Tuesday
// Thứ 4 - Wednesday
// Thứ 5 - Thursday
// Thứ 6 - Friday
// Thứ 7 - Saturday
// CN - Sunday

(function () {
  const date = new Date();
  const dayNameList = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const day = dayNameList[date.getDay()];
  const currTime = date.toLocaleTimeString();
  console.log(`Today: ${day}`);
  console.log(`Current time is ${currTime}`);
})();
