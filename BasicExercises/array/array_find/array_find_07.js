// Tìm email đầu tiên trong mảng
// Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
// Ðiều kiện của một email hợp lệ:
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined.

function isValidCharacter(str) {
  const regExp = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g);
  return !regExp.test(str);
}

function isValidEmail(email) {
  if (!email.includes('@') || !email.includes('.')) {
    return false;
  }
  const nameEmail = email.split('@')[0];

  if (nameEmail === '') return undefined;

  const domains = [email.split('@')[0], ...email.split('@')[1].split('.')];
  for (let index = 0; index < domains.length; index++) {
    const element = domains[index];
    if (index <= 1 && element.length < 3) return false;
    if (index > 1 && element.length < 2) return false;
    if (index > 1 && !['com','vn'].includes(element)) return false;

    if (!isValidCharacter(element)) return false;
  }
  return true;
}

function isValidEmailByRegExp(email){
    
}

export function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;
  return strList.filter((str) => str !== '').find((str) => isValidEmail(str));
}
