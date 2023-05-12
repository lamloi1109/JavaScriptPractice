import { findFirstEmail } from './array_find_07.js';

// Tìm email đầu tiên trong mảng
// Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
// Ðiều kiện của một email hợp lệ:
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined.

describe('findFirstEmail(strList)', () => {
  test('should return undefined if strList is not an array', () => {
    expect(findFirstEmail('dsad')).toBe(undefined);
  });
  test('should return undefined if strList is empty array', () => {
    expect(findFirstEmail([])).toBe(undefined);
  });
  test('should return undefined if strList does have valid email', () => {
    expect(findFirstEmail(['abc@easy.frontend' ])).toBe(undefined);
  });
  test('should return first email if strList has valid email', () => {
    expect(findFirstEmail(['abc@gmail.com'])).toBe('abc@gmail.com');
  });
});
