export default class ProductList {
    constructor(dataSource, parentElement) {
        this.dataSource = dataSource;
        this.parentElement = parentElement;
    }

    renderList(products) {
        if (!Array.isArray(products) || !this.parentElement) return;

        this.parentElement.innerHTML = products
            .map((product) => this.productTemplate(product))
            .join("");
    }

    productTemplate(product) {
        const id = product?.Id || "";
        const name = product?.Name || "No Name";
        const image = product?.Image || "";
        const price = product?.FinalPrice || 0;

        return `
      <li class="product-card">
        <a href="product_pages/index.html?product=${id}">
          <img src="${image}" alt="${name}" />
          <h3>${name}</h3>
          <p class="product-card__price">$${price}</p>
        </a>
      </li>
    `;
    }
}