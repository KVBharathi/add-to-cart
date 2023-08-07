const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

let total = 0;

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.parentElement;
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);

    total += productPrice;
    cartTotal.textContent = total.toFixed(2);
  });
});
