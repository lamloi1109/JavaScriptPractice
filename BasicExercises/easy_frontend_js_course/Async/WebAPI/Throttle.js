function throttle(callBackFn, wait) {
  let isThrottling = false;
  return function () {
    if (isThrottling) return;
    isThrottling = true;
    setTimeout(() => {
      callBackFn();
      isThrottling = false;
    }, wait);
  };
}

function log() {
  console.log('Tadaaaa~~~');
}

const throttleLog = throttle(log, 500);
setTimeout(throttleLog,600);
setTimeout(throttleLog,600);
setTimeout(throttleLog,600);
setTimeout(throttleLog,700);
setTimeout(throttleLog,800);


