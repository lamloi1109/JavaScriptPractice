// Hiển thị địa chỉ người dùng
// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
// chuỗi address hoàn chỉnh
// Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
// Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.

// ko phải obj
// ko chứa 1 trong các key number, street, ward, district, city

export function getDisplayedAddress(address) {
  if (typeof address !== "object" || Object.keys(address).length === 0)
    return undefined;

  const keys = ["number", "street", "ward", "district", "city"];
  let isValidAddress = false;
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (Object.keys(address).some((address) => address === element)) {
      isValidAddress = true;
      break;
    }
  }

  if (!isValidAddress) return "";
  //   let result = "";
  //   for (const iterator in address) {
  //     result = result + " " + address[iterator];
  //   }

  return Object.keys(address)
    .reduce((acc, curr) => {
      if (curr !== "number") {
        address[curr] = address[curr]
          .split(" ")
          .filter((str) => str !== "")
          .join(" ");
      }

      if (curr === "number" || curr === "street") {
        return (acc = acc + " " + address[curr]);
      }

      acc = acc + ", " + address[curr];
      return acc;
    }, "")
    .trim();
}