// Function to scroll to the cart section
function scrollToCart() {
  const cartSection = document.getElementById("shopping-cart");
  cartSection.scrollIntoView({ behavior: "smooth" });
}

// Function to add items to the cart
function addToCart(productName) {
  const cartItemsList = document.getElementById("cart-items");
  const listItem = document.createElement("li");
  listItem.textContent = `${productName} added to cart`;
  cartItemsList.appendChild(listItem);
}

// Ensure the cart is visible when clicking on the floating button or the "Go to Cart" nav button
document
  .getElementById("go-to-cart-nav")
  .addEventListener("click", scrollToCart);
document.getElementById("go-to-cart").addEventListener("click", scrollToCart);
