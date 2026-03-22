import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

// Create data source
const dataSource = new ProductData("tents");

/**
 * Add a product to the cart in localStorage
 */
function addProductToCart(product) {
  if (!product) return;

  const cartItems = getLocalStorage("so-cart") || [];

  cartItems.push(product);

  setLocalStorage("so-cart", cartItems);
}

/**
 * Handle Add to Cart button click
 */
async function addToCartHandler(e) {
  const id = e.target.dataset.id;

  if (!id) {
    console.error("No product ID found on button.");
    return;
  }

  try {
    const product = await dataSource.findProductById(id);

    if (!product) {
      console.error("Product not found.");
      return;
    }

    addProductToCart(product);

    console.log("Product added to cart:", product);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}

/**
 * Initialize event listener AFTER DOM loads
 */
function init() {
  const button = document.getElementById("addToCart");

  if (!button) {
    console.warn("Add to Cart button not found.");
    return;
  }

  button.addEventListener("click", addToCartHandler);
}

// Run init when DOM is ready
document.addEventListener("DOMContentLoaded", init);