import { toggleDetails } from "./toggleDetails.js";

export function showProductData(product) {
    const productMarkup = `
    <h1>${product.name}</h1>
    <img src="${product.img}" alt="${product.name}" />
    <p>${product.barcode}</p>
    `;
    
    const detailsEl = document.querySelector('.details');
    detailsEl.addEventListener('click', toggleDetails);
    detailsEl.innerHTML = productMarkup;
    detailsEl.classList.add('result', 'open')
}