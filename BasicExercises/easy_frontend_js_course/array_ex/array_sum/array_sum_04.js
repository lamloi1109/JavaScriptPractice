// Tổng tiền của giỏ hàng
// Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.

export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || calcCartTotal.length === 0) return 0;

  let sum = 0;

  for (let index = 0; index < cartItemList.length; index++) {
    const cartItem = cartItemList[index];
    const cartItemTotal = cartItem.product.price * cartItem.quantity;
    sum = sum + cartItemTotal;
  }

  return sum;
}

export function calcCartTotalV2(cartItemList) {
  if (!Array.isArray(cartItemList) || calcCartTotal.length === 0) return 0;

  return cartItemList.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
