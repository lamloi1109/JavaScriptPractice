import {
  hasFreeShip,
  hasFreeShipV2,
  hasFreeShipV3,
  hasFreeShipV4,
  hasFreeShipV5,
} from "./array_check_08";
// Kiểm tra có sản phẩm nhỏ hơn giá cho trước và free ship không
// Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào free ship và giá nhỏ hơn price
// không?

// productList is not array
// productList is empty array
// price is not number
// return false if args is invalid

// productList does not have product price less than args price
// productList does not have product free ship

describe("hasFreeShip(productList, price)", () => {
  const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
  ];
  test("should false if productList is empty array ", () => {
    expect(hasFreeShip([], 1000000)).toBe(false);
  });
  test("should false if price is not a number ", () => {
    expect(hasFreeShip([], 1000000)).toBe(false);
  });
  test("should false if productList does not have price < price args ", () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 102005000 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 15000000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should false if productList does not have free ship ", () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should correct if productList has free ship and pice < price args ", () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });
});

describe("hasFreeShipV2(productList, price)", () => {
  const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
  ];
  test("should false if productList is empty array ", () => {
    expect(hasFreeShipV2([], 1000000)).toBe(false);
  });
  test("should false if price is not a number ", () => {
    expect(hasFreeShipV2([], 1000000)).toBe(false);
  });
  test("should false if productList does not have price < price args ", () => {
    expect(
      hasFreeShipV2(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 102005000 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 15000000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should false if productList does not have free ship ", () => {
    expect(
      hasFreeShipV2(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should correct if productList has free ship and pice < price args ", () => {
    expect(
      hasFreeShipV2(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });
});

describe("hasFreeShipV3(productList, price)", () => {
  const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
  ];
  test("should false if productList is empty array ", () => {
    expect(hasFreeShipV3([], 1000000)).toBe(false);
  });
  test("should false if price is not a number ", () => {
    expect(hasFreeShipV3([], 1000000)).toBe(false);
  });
  test("should false if productList does not have price < price args ", () => {
    expect(
      hasFreeShipV3(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 102005000 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 15000000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should false if productList does not have free ship ", () => {
    expect(
      hasFreeShipV3(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should correct if productList has free ship and pice < price args ", () => {
    expect(
      hasFreeShipV3(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });
});

describe("hasFreeShipV4(productList, price)", () => {
  const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
  ];
  test("should false if productList is empty array ", () => {
    expect(hasFreeShipV4([], 1000000)).toBe(false);
  });
  test("should false if price is not a number ", () => {
    expect(hasFreeShipV4([], 1000000)).toBe(false);
  });
  test("should false if productList does not have price < price args ", () => {
    expect(
      hasFreeShipV4(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 102005000 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 15000000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should false if productList does not have free ship ", () => {
    expect(
      hasFreeShipV4(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should correct if productList has free ship and pice < price args ", () => {
    expect(
      hasFreeShipV4(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });
});

describe("hasFreeShipV5(productList, price)", () => {
  const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
  ];
  test("should false if productList is empty array ", () => {
    expect(hasFreeShipV5([], 1000000)).toBe(false);
  });
  test("should false if price is not a number ", () => {
    expect(hasFreeShipV5([], 1000000)).toBe(false);
  });
  test("should false if productList does not have price < price args ", () => {
    expect(
      hasFreeShipV5(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 102005000 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 15000000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should false if productList does not have free ship ", () => {
    expect(
      hasFreeShipV5(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: false,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });

  test("should correct if productList has free ship and pice < price args ", () => {
    expect(
      hasFreeShipV5(
        [
          { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
          {
            id: 2,
            name: "Iphone 16 Pro Max",
            isFreeShip: true,
            price: 1500000,
          },
        ],
        1000000
      )
    ).toBe(false);
  });
});
