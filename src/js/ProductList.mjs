export default class ProductList{
  constructor (category, dataSource, listElement){
    this. category = 'tents'
    this. dataSource = dataSource
    this. listElement  = listElement
  }
  
  async init(){
    console.log('init running')
    const list = await this.dataSource.getData()
    console.log(list)
  }
}
function productCardTemplate(listElement){
  return `<li class="product-card">
    <a href="product_pages/?product=">
      <img src="" alt="Image of ">
      <h2 class="card__brand"></h2>
      <h3 class="card__name"></h3>
      <p class="product-card__price">$</p>
    </a>
  </li>`
}
function renderProductList(){

}
