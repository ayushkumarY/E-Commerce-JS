const cartValue = document.querySelector("#cartValue");
const cartValue1 = document.querySelector("#cartValue1");

export const updateCartValue = (cartProducts) => {
  const cartCount = cartProducts.length;
  if (cartValue) {
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartCount}</i>`;
  }

  if (cartValue1) {
    cartValue1.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartCount}</i>`;
  }
};
