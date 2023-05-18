// Bài 57: Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không
function isAllEvenNumberOfN(number) {
    if (typeof number !== 'number' || number <= 0) return undefined;
  
    let remaining = number;
  
    while (remaining > 0) {
      let lastNumber = remaining % 10;
      if (lastNumber % 2 !== 0) {
        return false;
      }
  
      remaining = Math.trunc(remaining / 10);
    }
    return true;
  }
  
  console.log(isAllEvenNumberOfN(1233520545));
  console.log(isAllEvenNumberOfN(2222));
  console.log(isAllEvenNumberOfN(8751802580));
  