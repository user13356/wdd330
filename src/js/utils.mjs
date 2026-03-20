// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) ;
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// utils.mjs

/**
 * Render a list of items into a parent element using a template function
 * @param {Function} templateFn - Function that returns HTML string for one item
 * @param {HTMLElement} parentElement - DOM element to insert HTML into
 * @param {Array} list - Array of data items
 * @param {string} position - Where to insert the HTML (default: 'afterbegin')
 * @param {boolean} clear - Whether to clear existing content (default: false)
 */
export function renderListWithTemplate(templateFn, parentElement, list, position = 'afterbegin', clear = false) {
  if (!parentElement || !list || !templateFn) return;

  if (clear) {
    parentElement.innerHTML = '';
  }

  const htmlStrings = list.map(templateFn).join('');
  parentElement.insertAdjacentHTML(position, htmlStrings);
}