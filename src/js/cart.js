import { getLocalStorage, setLocalStorage, updateCartCount, loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  //1
  const productList = document.querySelector(".product-list");
  const cartFooter = document.querySelector(".cart-footer");
  const cartTotalElement = document.querySelector(".cart-total");

  if (cartItems.length === 0) {
    // 2. If cart is empty, show message and hide footer
    productList.innerHTML = "<li>Your cart is empty.</li>";
    cartFooter.classList.add("hide");
  } else {
    // 3. If cart numbers add, render them




    //2
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
  //3 
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((button) => addRemoveListener(button));

  const quantityChangeButtons =
    document.querySelectorAll(".quantity_changer");
  quantityChangeButtons.forEach((button) =>
    addQuantityChangeListener(button),
  );

  // 4. Calculate total and show footer
  const total = cartItems.reduce(
    (sum, item) => sum + item.FinalPrice * item.Quantity,
    0,
  );
  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  cartFooter.classList.remove("hide");
}


//4
function cartItemTemplate(item) {
  const productUrl = `/product_pages/?product=${item.Id}`;
  const newItem = `<li class="cart-card divider">

//5

  <span class="remove-button" title="Remove from cart" data-id=${item.Id}>&times;</span>

  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="${productUrl}">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
//6


function addRemoveListener(buttonElement) {
  buttonElement.addEventListener("click", () => {
    const deletedProductId = buttonElement.getAttribute("data-id");

    const cartItems = getLocalStorage("so-cart") || [];
    const deleteIndex = cartItems.findIndex(
      (element) => element.Id === deletedProductId,
    );

    cartItems.splice(deleteIndex, 1);
    setLocalStorage("so-cart", cartItems);

    updateCartCount();

    //7
    renderCartContents();

    //8

  });
}

function addQuantityChangeListener(quantity_changer_button_element) {
  quantity_changer_button_element.addEventListener("click", () => {
    const thisProductId =
      quantity_changer_button_element.getAttribute("data-id");

    const cartItems = getLocalStorage("so-cart");

    const itemAlreadyInCart = cartItems.find(
      (item) => item.Id === thisProductId,
    );

    if (quantity_changer_button_element.id === "add_button") {
      itemAlreadyInCart.Quantity++;
    } else if (quantity_changer_button_element.id === "subtract_button") {
      itemAlreadyInCart.Quantity--;

      if (itemAlreadyInCart.Quantity <= 0) {
        const deleteIndex = cartItems.findIndex(
          (element) => element.Id === thisProductId,
        );

        cartItems.splice(deleteIndex, 1);
      }
    }

    setLocalStorage("so-cart", cartItems);

    updateCartCount();
    renderCartContents();
  });
}

// Load dynamic header and footer templates
loadHeaderFooter();
renderCartContents();


//9