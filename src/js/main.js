import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData('tents')
const productDetails = new ProductList('880RR',dataSource)
//const productList = new ProductList(constructor ('tents', dataSource, listElement))

productDetails.init
