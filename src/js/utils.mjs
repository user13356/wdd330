//
// Selectors
//
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

//
// Local Storage
//
export function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return null;
  }
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

//
// Click helper (touch + click support)
//
export function setClick(selector, callback) {
  const element = qs(selector);

  if (!element) return;

  element.addEventListener("click", callback);

  element.addEventListener("touchend", (event) => {
    event.preventDefault();
    callback(event);
  });
}

//
// URL parameter helper
//
export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

//
// Render list using template
//
export function renderListWithTemplate(
  template,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  if (!Array.isArray(list) || !parentElement) return;

  const htmlStrings = list.map((item) => template(item));

  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

//
// Sort products
//
export function sortProducts(products, sortType) {
  if (!Array.isArray(products)) return [];

  const sorted = [...products];

  switch (sortType) {
    case "price-asc":
      return sorted.sort((a, b) => a.FinalPrice - b.FinalPrice);

    case "price-desc":
      return sorted.sort((a, b) => b.FinalPrice - a.FinalPrice);

    case "name-asc":
      return sorted.sort((a, b) =>
        (a.Name || "").localeCompare(b.Name || "")
      );

    default:
      return products;
  }
}