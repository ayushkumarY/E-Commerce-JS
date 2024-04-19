import { getCartProductFromLS } from "../getCartProducts";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);

  // console.log(existingProduct);

  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
    // console.log(quantity, price);
  }

  return { quantity, price };
};
