import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // get cart array from localStorage, or empty array if null
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product); // add new product
  setLocalStorage("so-cart", cartItems); // save updated cart
}

async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Add event listeners to all add-to-cart buttons
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", addToCartHandler);
});