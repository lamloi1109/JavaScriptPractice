// Bài 88: Hãy sử dụng vòng lặp for để xuất tất cả các ký tự từ A đến Z

function printAZ() {
  for (let index = 65; index <= 90; index++) {
    console.log(String.fromCharCode(index));
  }
}

printAZ();
