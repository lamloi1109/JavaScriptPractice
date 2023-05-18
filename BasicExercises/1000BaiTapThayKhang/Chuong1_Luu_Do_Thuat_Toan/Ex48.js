// Bài 48: Hãy tính tích các chữ số lẻ của số nguyên dương n

function totalOddNumberOfN(n) {
    if (typeof n !== 'number') {
      return undefined;
    }
  
    if (n <= 0) return 0;
  
    let remaining = n;
    let totalOddNumber = 0;
  
    while (remaining > 0) {
      let lastNumber = remaining % 10;
  
      if (lastNumber % 2 !== 0) totalOddNumber += lastNumber;
  
      remaining = Math.trunc(remaining / 10);
    }
  
    return totalOddNumber;
  }
  console.log(totalOddNumberOfN(246));
  console.log(totalOddNumberOfN(357));
  console.log(totalOddNumberOfN(321));
  
  function totalOddNumberOfNV2(n) {
    if (typeof n !== 'number') {
      return undefined;
    }
  
    if (n <= 0) return 0;
  
    const numberList = n.toString().split('');
  
    return numberList.reduce((totalOddNumber, number) => {
      const n = Number.parseInt(number);
      if (n % 2 !== 0) totalOddNumber += n;
      return totalOddNumber;
    }, 0);
  }
  
  console.log(totalOddNumberOfNV2(246));
  console.log(totalOddNumberOfNV2(357));
  console.log(totalOddNumberOfNV2(321));