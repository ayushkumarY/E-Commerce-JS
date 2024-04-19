import { getCartProductFromLS } from "../getCartProducts";
import { updateCartValue } from "../updateCartValue";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // to remove the div onclick
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    // show toast when product added to the cart
    showToast("delete", id);
  }

  // update the localStorage after removing the item
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  updateCartValue(cartProducts);

  // -----------------------------------------------------
  // calculating the card total in our cartProducts page
  // --------------------------------------------------------
  updateCartProductTotal();
};
