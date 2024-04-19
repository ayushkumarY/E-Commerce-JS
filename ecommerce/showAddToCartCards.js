import products from "../api/products.json";
import products1 from "../api/products1.json";
import { getCartProductFromLS } from "../getCartProducts.js";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProductFromCart } from "./removeProductFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCartProductFromLS();
// console.log(cartProducts);

let filterProducts = products.filter((curprod) => {
  return cartProducts.some((curElem) => curElem.id === curprod.id);
});

let filterProducts1 = products1.filter((curprod) => {
  return cartProducts.some((curElem) => curElem.id === curprod.id);
});

// console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { id, image, brand, name, price, stock } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    let lsActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productPrice").textContent =
      "₹" + lsActualData.price;
    productClone.querySelector(".productBrand").textContent = brand;
    productClone.querySelector(".productQuantity").textContent =
      lsActualData.quantity;

    // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, price, stock);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProductFromCart(id));

    cartElement.appendChild(productClone);
  });

  filterProducts1.forEach((curProd) => {
    const { id, image, brand, name, price, stock } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    let lsActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productPrice").textContent =
      "₹" + lsActualData.price;
    productClone.querySelector(".productBrand").textContent = brand;
    productClone.querySelector(".productQuantity").textContent =
      lsActualData.quantity;

    // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, price, stock);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProductFromCart(id));

    cartElement.appendChild(productClone);
  });
};

// showing the cartProducts
showCartProduct();

// -----------------------------------------------------
// calculating the card total in our cartProducts page
// --------------------------------------------------------
updateCartProductTotal();
