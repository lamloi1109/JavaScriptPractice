import { getDisplayedAddress } from "./string_06";
// Hiển thị địa chỉ người dùng
// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
// chuỗi address hoàn chỉnh
// Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
// Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.

describe("getDisplayedAddress(address)", () => {
  test("should return undefined when address is not obj address", () => {
    expect(getDisplayedAddress("dsad")).toBe(undefined);
    expect(getDisplayedAddress([])).toBe(undefined);
    expect(getDisplayedAddress({})).toBe(undefined);
    expect(getDisplayedAddress(1)).toBe(undefined);
  });

  test("should return '' when address has not obj address || value is '' ", () => {
    expect(
      getDisplayedAddress({
        a: "Dsad",
        b: "Dsad",
      })
    ).toBe("");
  });

  test("should return address when address obj is valid", () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: "Nguyen Cong Tru",
        ward: "Ward 11",
        district: "Binh Thanh District",
        city: "HCMC",
      })
    ).toBe("123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC");
    expect(
      getDisplayedAddress({
        street: "Nguyen Cong Tru",
        district: "Binh Thanh District",
      })
    ).toBe("Nguyen Cong Tru, Binh Thanh District");
  });
});
