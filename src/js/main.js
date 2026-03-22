import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { qs, sortProducts } from "./utils.mjs";

// data source
const dataSource = new ProductData("tents");

// DOM elements
const listElement = document.querySelector(".product-list");
const sortSelect = qs("#sortSelect");

// create product list instance
const productList = new ProductList(dataSource, listElement);

let products = [];

// initialize products
async function init() {
  products = await dataSource.getData();
  productList.renderList(products);
}

init();

// sorting
if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    const sorted = sortProducts(products, sortSelect.value);
    productList.renderList(sorted);
  });
}