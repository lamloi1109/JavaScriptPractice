// Bài 91: In tất cả các số nguyên dương lẻ nhỏ hơn 100

function printOddNumberLessThan100() {
  for (let index = 1; index <= 100; index++) {
    if (index % 2 !== 0) console.log(index);
  }
}
printOddNumberLessThan100()