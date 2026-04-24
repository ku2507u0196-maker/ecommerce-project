let cart = [];

function showPage(page) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(page).classList.add('active');
}

function addToCart(name, price) {
  cart.push({name, price});
  displayCart();
}

function displayCart() {
  let cartDiv = document.getElementById('cartItems');
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}
    <button onclick="removeItem(${index})">Remove</button></p>`;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total').innerText = "Total: ₹" + total;
}

function toggleDetails(btn) {
  let details = btn.nextElementSibling;

  if (details.style.display === "block") {
    details.style.display = "none";
    btn.innerText = "View Details";
  } else {
    details.style.display = "block";
    btn.innerText = "Hide Details";
  }
}
