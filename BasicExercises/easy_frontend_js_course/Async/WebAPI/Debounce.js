function debounce(callBackFn, wait) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callBackFn, wait);
  };
}
function log() {
  console.log('Tada~~~~');
}
const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();
debounceLog();
