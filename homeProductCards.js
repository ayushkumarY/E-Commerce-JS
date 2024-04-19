import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const procontainer = document.querySelector(".pro-container");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((curProd) => {
    const { brand, id, image, name, price, stock } = curProd;

    const productclone = document.importNode(productTemplate.content, true);

    productclone.querySelector(".productName").textContent = name;
    productclone.querySelector(".productPrice").textContent = `₹${price}`;
    productclone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;
    productclone.querySelector(".productImage").src = image;
    productclone.querySelector(".brandName").textContent = brand;
    productclone.querySelector(".productStock").textContent = stock;

    productclone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productclone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productclone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    procontainer.append(productclone);
  });
};
