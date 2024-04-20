import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./ecommerce/showToast";

// -----------------------------------------------------
// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
// --------------------------------------------------------
getCartProductFromLS();

// -----------------------------------------------------
// to add the data into localStorage
// --------------------------------------------------------
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentProElem = document.querySelector(`#card${id}`);
  // console.log(currentProElem);

  // console.log(currentProElem);
  let quantity = currentProElem.querySelector(".productQuantity").innerText;
  let price = currentProElem.querySelector(".productPrice").innerText;
  // console.log(quantity, price);

  price = price.replace("₹", "");
  // console.log(quantity, price);

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  // console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    // console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

  if (existingProd) {
    // alert("bhai duplicate hai");
    showToast("add", id);
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push(updateCart);
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // update the cart button value
  updateCartValue(arrLocalStorageProduct);

  showToast("add", id);
};
