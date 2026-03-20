import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

// create the data source
const dataSource = new ProductData();

// get the target HTML element
const tentsListElement = document.getElementById('tentsList');

// create ProductList instance
const tentsList = new ProductList('tents', dataSource, tentsListElement);

// initialize (fetch data and render)
tentsList.init();