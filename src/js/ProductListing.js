
import ProductData from "./ProductData.mjs";
import ProductList from './ProductList.mjs';
import { loadHeaderFooter } from "./utils.mjs";
import { getParam } from "./utils.mjs";

/*const dataSource = new ProductData('tents')

const list = new ProductList('tents', dataSource, listElement)
*/
const category = getParam('category');
const listElement = document.querySelector('.product-list');
const mySource = new ProductData();
const myList = new ProductList (category, mySource, listElement);




myList.init();

console.log("hola gilasa")

loadHeaderFooter('/partials/header.html' , '/partials/footer.html')
