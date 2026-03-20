// main.js
import ProductData from './ProductData.mjs'; // import the module

// create an instance
const dataSource = new ProductData("tents");

// now you can use dataSource
console.log(dataSource);

// Example usage
(async () => {
  const product = await dataSource.findProductById(1);
  console.log('Found product:', product);
})();