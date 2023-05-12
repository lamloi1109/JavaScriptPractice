import { findLastUrl, findLastUrlV2 } from './array_find_08.js';
// Tìm url cuối cùng trong mảng
// Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList
// Ðiều kiện cho một URL hợp lệ:
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ


describe('findLastURL(strList)', () => {
  it('should return undefined if strList is not an array', () => {
    expect(findLastUrl('Dsadas')).toBe(undefined);
  });

  it('should return undefined if strList is empty array', () => {
    expect(findLastUrl([])).toBe(undefined);
  });

  it('should return undefined if strList does not have URL', () => {
    expect(findLastUrl(['dsadas', 'dsadasdsas'])).toBe(undefined);
  });

  it('should return last URL if strList has URL', () => {
    expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe('wss://chat.sample.com');
  });
  
});

describe('findLastURLV2(strList)', () => {
  it('should return undefined if strList is not an array', () => {
    expect(findLastUrlV2('Dsadas')).toBe(undefined);
  });

  it('should return undefined if strList is empty array', () => {
    expect(findLastUrlV2([])).toBe(undefined);
  });

  it('should return undefined if strList does not have URL', () => {
    expect(findLastUrlV2(['dsadas', 'dsadasdsas'])).toBe(undefined);
  });

  it('should return last URL if strList has URL', () => {
    expect(findLastUrlV2(['https://google.com', 'wss://chat.sample.com'])).toBe('wss://chat.sample.com');
  });
  
});