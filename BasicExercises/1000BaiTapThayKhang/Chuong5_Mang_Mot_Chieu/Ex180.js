// Bài 180: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện nhỏ hơn trị tuyệt đối của giá trị đứng liền sau nó và lớn hơn trị tuyệt đối của giá trị đứng liền trước nó

function statisticsNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) {
      return undefined;
    }
  
    const result = [];
  
    for (let index = 2; index < numberList.length; index++) {
      if ( (numberList[index - 2] < Math.abs(numberList[index - 1])) && (numberList[index - 1] < Math.abs(numberList[index]))) {
        result.push(numberList[index - 1]);
      }
    }
    return result;
  }
  
