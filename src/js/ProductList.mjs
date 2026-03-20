// ProductList.mjs

import { renderListWithTemplate } from './utils.mjs'; // import the reusable render function

// Template function for a single product card
function productCardTemplate(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    </div>
  `;
}

// Exporting the class as default
export default class ProductList {
  /**
   * Constructor for ProductList
   * @param {string} category - The product category (e.g., "tents")
   * @param {object} dataSource - Instance of ProductData or similar data provider
   * @param {HTMLElement} listElement - The DOM element where products will be rendered
   */
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.products = [];
  }

  /**
   * Load products asynchronously from the dataSource
   */
  async loadProducts() {
    if (this.dataSource.getProductsByCategory) {
      this.products = await this.dataSource.getProductsByCategory(this.category);
    }
  }

  /**
   * Initialize the product list: fetch and render
   */
  async init() {
    await this.loadProducts();
    this.renderList(this.products);
  }

  /**
   * Render products using the reusable template renderer
   * @param {Array} products - Array of product objects
   */
  renderList(products) {
    if (!this.listElement) return;

    // Use the utility function for reusable rendering
    renderListWithTemplate(
      productCardTemplate, // template function
      this.listElement,    // parent element
      products,            // data list
      'afterbegin',        // insert position (default)
      true                 // clear existing content
    );

    // Attach Add to Cart button events
    this.listElement.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', async e => {
        const id = e.target.dataset.id;
        const product = await this.dataSource.findProductById(id);
        console.log('Add to cart:', product);
        // call addProductToCart(product) here if you have it
      });
    });
  }
}