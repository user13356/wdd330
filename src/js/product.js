
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { getParam } from './utils.mjs';
import { loadHeaderFooter } from './utils.mjs';


const dataSource = new ProductData('category');  //Objeto para ubicar la info del producto en json file.
const productID = getParam('product')   //Objeto para ubicar el productID desde el key value del URL
const product = new ProductDetails(productID, dataSource); //Objeto que contiene el id y la fuente para mostrarlo
product.init();


loadHeaderFooter('/partials/header.html', '/partials/footer.html');




