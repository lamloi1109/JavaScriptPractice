const intervalId = setInterval(() => {
  console.log('abc');
}, 1000);
clearInterval(intervalId);

// clearInterval có thể clear được set timeout và ngược lại do chúng share chung 1 khung id
// Nhưng không nên dùng clearSetInterval để clear set time out và ngược lại do khiến người đọc khó hiểu hoặc gây hiểu nhầm