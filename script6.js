const cart = [
  { id: 1, name: "Laptop", price: 1000, quantity: 1 },
  { id: 2, name: "Wireless Mouse", price: 30, quantity: 2 },
  { id: 3, name: "Keyboard", price: 80, quantity: 1 },
  { id: 4, name: "USB-C Hub", price: 45, quantity: 3 }
];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalContainer = document.getElementById("cart-total");

function displayCart() {
  
  const htmlString = cart.map(product => {
    const itemTotal = product.price * product.quantity;
    return `
      <div class="cart-item">
        <div>
          <h4>${product.name}</h4>
          <p>$${product.price} x ${product.quantity}</p>
        </div>
        <strong>$${itemTotal}</strong>
      </div>
    `;
  }).join('');

  cartItemsContainer.innerHTML = htmlString;
}

function displayTotal() {
  const finalTotal = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  cartTotalContainer.innerHTML = `<strong>Total: $${finalTotal}</strong>`;
}

displayCart();
displayTotal();