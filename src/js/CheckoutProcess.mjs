import { getLocalStorage } from './utils.mjs';


export default class CheckoutProcess{

  constructor(taxElement, shippingElement, subtotalElement, totalElement){
    this.taxElement = taxElement;
    this.shippingElement = shippingElement;
    this.subtotalElement = subtotalElement;
    this.totalElement = totalElement;
  }

getSubTotalOrder(){

  const cartItems = getLocalStorage('so-cart')
  let subtotal = 0
    
  cartItems.forEach((item) => {
    
    subtotal = subtotal + Number(item.FinalPrice)
  });
  return subtotal
}

getTotal(){

  document.getElementById('zip').addEventListener('blur' , () =>{
  this.getTotal.bind(this)
  })

  const tax = 0.06 * this.getSubTotalOrder()
  const cartItems = getLocalStorage('so-cart')
  const n = cartItems.length
  const shipping =  (n - 1) * 2 + 10

  const orderTotal = tax + shipping + this.getSubTotalOrder()

  this.taxElement.innerHTML = `Tax: ${tax}`
  this.shippingElement.innerHTML = `Shipping: ${shipping}`
  this.subtotalElement.innerHTML = `Subtotal: $ ${this.getSubTotalOrder()}`
  this.totalElement.innerHTML = `<strong> Total Order : $ </strong>  ${orderTotal}`

}

}





