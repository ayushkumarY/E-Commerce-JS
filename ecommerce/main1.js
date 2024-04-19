import products from "../api/products.json";
import products1 from "../api/products1.json";
import { showProductContainer } from "../homeProductCards";
import "./style.css";

// console.log(products);
// Define a function named 'showProductContainer' that takes an array of products as input
// Function to show product container
function showProductContainers() {
  showProductContainer(products1);
}

// Execute the function to display products
showProductContainers();

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
