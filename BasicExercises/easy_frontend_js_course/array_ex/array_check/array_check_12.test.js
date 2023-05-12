import { hasFibonaciNumber,  hasFibonaciNumberV4, hasFibonaciNumberV6 } from "./array_check_12";
// Kiểm tra mảng có số fibonaci nhỏ hơn 100 không?
// Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số
// fibonaci nhỏ hơn 100 không?
// Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết
// fibonaci là gì thì đọc ở đây nhé
// Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không? Trả về
// true nếu có, ngược lại trả về false

// numberList is empty
// numberList is not an array
// numberList does have fibonaci number
// fibonaciNumber > 100
// numberList has fibonaci number and  fibonaci number < 100

describe("hasFibonaciNumber(NumberList)", () => {
  test("should return false if numberList is not an array", () => {
    expect(hasFibonaciNumber({})).toBe(false);
  });
  test("should return false if numberList is empty array", () => {
    expect(hasFibonaciNumber([])).toBe(false);
  });

  test("should return false if numberList does have fibonaci number", () => {
    expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
  });

  test("should return false if fibonaciNumber > 100", () => {
    expect(hasFibonaciNumber([4, 6, 144])).toBe(false);
  });

  test("should return correct if numberList has fibonaci and it < 100", () => {
    expect(hasFibonaciNumber([89])).toBe(true);
  });
});

describe("hasFibonaciNumberV4(NumberList)", () => {
    test("should return false if numberList is not an array", () => {
      expect(hasFibonaciNumberV4({})).toBe(false);
    });
    test("should return false if numberList is empty array", () => {
      expect(hasFibonaciNumberV4([])).toBe(false);
    });
  
    test("should return false if numberList does have fibonaci number", () => {
      expect(hasFibonaciNumberV4([4, 6, 7])).toBe(false);
    });
  
    test("should return false if fibonaciNumber > 100", () => {
      expect(hasFibonaciNumberV4([4, 6, 144])).toBe(false);
    });
  
    test("should return correct if numberList has fibonaci and it < 100", () => {
      expect(hasFibonaciNumberV4([89])).toBe(true);
    });
  });
  
  describe("hasFibonaciNumberV6(NumberList)", () => {
    test("should return false if numberList is not an array", () => {
      expect(hasFibonaciNumberV6({})).toBe(false);
    });
    test("should return false if numberList is empty array", () => {
      expect(hasFibonaciNumberV6([])).toBe(false);
    });
  
    test("should return false if numberList does have fibonaci number", () => {
      expect(hasFibonaciNumberV6([4, 6, 7])).toBe(false);
    });
  
    test("should return false if fibonaciNumber > 100", () => {
      expect(hasFibonaciNumberV6([4, 6, 144])).toBe(false);
    });
  
    test("should return correct if numberList has fibonaci and it < 100", () => {
      expect(hasFibonaciNumberV6([89])).toBe(true);
    });
  });
  