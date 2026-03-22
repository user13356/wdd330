import { getParam, getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.productId = getParam("product");
        this.product = null;
    }

    async init() {
        if (!this.productId) return;

        this.product = await this.dataSource.findProductById(this.productId);

        if (!this.product) return;

        this.renderProductDetails();

        document
            .getElementById("addToCart")
            .addEventListener("click", () => this.addProductToCart());
    }

    addProductToCart() {
        const cartItems = getLocalStorage("so-cart") || [];
        cartItems.push(this.product);
        setLocalStorage("so-cart", cartItems);
    }

    renderProductDetails() {
        const brand = this.product.Brand?.Name || "";
        const name = this.product.Name || "";
        const image = this.product.Image || "";
        const price = this.product.FinalPrice || "";
        const color = this.product.Colors?.[0]?.ColorName || "";
        const description =
            this.product.Description || this.product.DescriptionHtmlSimple || "";

        document.querySelector("h2").textContent = brand;
        document.querySelector("h3").textContent = name;

        const img = document.getElementById("productImage");
        img.src = image;
        img.alt = name;

        document.getElementById("productPrice").textContent = `$${price}`;
        document.getElementById("productColor").textContent = color;

        document.getElementById("productDesc").textContent = description;

        document.getElementById("addToCart").dataset.id = this.product.Id;
    }
}