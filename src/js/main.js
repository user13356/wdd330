console.log('main.js loaded');
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';


const dataSource = new ProductData('tents')
const listElement = document.querySelector('.product-list');
const List = new ProductList('tents', dataSource, listElement)


List.init
console.log(List)

