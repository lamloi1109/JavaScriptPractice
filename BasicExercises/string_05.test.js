import { countURLs } from "./string_05.js";
// Ðếm số lượng url có trong câu
// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong

// str is not a string
// str length is 0
// str has not URL
// URL is invalid
describe("countURLs(str)", () => {
  test("should return -1 when str is not a string", () => {
    [NaN, null, undefined, {}, []].forEach((str) => {
      expect(countURLs(str)).toBe(-1);
    });
  });

  test("should return 0 when str length is 0", () => {
    ["", ``, ""].forEach((str) => {
      expect(countURLs(str)).toBe(0);
    });
  });

  test("should return 0 when str has not URL (URL is invalid)", () => {
    ["my website is: https://ez.com you can visit it", "my website is:"].forEach(
      (str) => {
        expect(countURLs(str)).toBe(0);
      }
    );
  });

  test("should return number URL when str has URL (URL is valid)", () => {
    ["my website is: http://ezfrontend.com you can visit it"].forEach(
      (str) => {
        expect(countURLs(str)).toBe(1);
      }
    );
  });

});
