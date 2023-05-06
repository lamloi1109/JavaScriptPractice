import { countEmails } from "./string_04";
// Ðếm số lượng email có trong câu
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào.
describe("countEmails(str)", () => {
  test("should return -1 when str is not a string or str length is 0 ", () => {
    [{}, undefined, null, [], {}].forEach((element) => {
      expect(countEmails(element)).toBe(-1);
    });
  });
  test("should return 0 when str is not a string or str length is 0", () => {
    ["", "", ``].forEach((element) => {
      expect(countEmails(element)).toBe(0);
    });
  });

  test("should return 0 when str have not emails", () => {
    ["my email should be a@a.com", "my email should be @ bla .com"].forEach(
      (element) => {
        expect(countEmails(element)).toBe(0);
      }
    );
  });

  test("should return number when str have emails", () => {
    [
      "my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn",
    ].forEach((element) => {
      expect(countEmails(element)).toBe(3);
    });
  });
});
