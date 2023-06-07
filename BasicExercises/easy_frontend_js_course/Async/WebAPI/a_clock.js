function formatTime(number) {
  let format = '0' + number;
  return format.slice(-2);
}

function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  console.log(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`);
}
function printClock() {
  let intervalId;
  (function () {
    intervalId = setInterval(() => {
      getTime();
    }, 1000);
  })();
  return intervalId;
}

const intervalId = printClock();
// console.log(intervalId);
// clearInterval(intervalId)
