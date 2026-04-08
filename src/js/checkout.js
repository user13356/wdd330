import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter('/partials/header.html','/partials/footer.html')


  const taxElement = document.getElementById('tax')
  const shippingElement = document.getElementById('shipping')
  const subtotalElement = document.getElementById('subtotal')
  const totalElement = document.getElementById ('total')

  const checkout = new CheckoutProcess(taxElement, shippingElement, subtotalElement, totalElement)


checkout.getTotal()

