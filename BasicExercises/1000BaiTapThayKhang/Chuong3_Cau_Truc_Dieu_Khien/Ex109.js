// Bài 109: Viết chương trình in bảng cửu chương ra màn hình

function inBangCuuChuong() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

inBangCuuChuong();
