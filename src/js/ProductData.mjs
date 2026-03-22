function convertToJson(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error("Bad Response");
}

export default class ProductData {
  constructor(category) {
    this.category = category;

    //  Vite path
    this.path = `/json/${this.category}.json`;
  }

  async getData() {
    try {
      const response = await import(this.path);
      return await convertToJson(response);
    } catch (error) {
      console.error("Error fetching product data:", error);
      return [];
    }
  }

  async findProductById(id) {
    try {
      const products = await this.getData();

      return products.find((item) => item.Id === id) || null;
    } catch (error) {
      console.error("Error finding product by ID:", error);
      return null;
    }
  }
}