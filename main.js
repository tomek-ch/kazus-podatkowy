// Basket
const openBasketBtn = document.getElementById("open-basket");
const basketModal = document.querySelector(".basket-modal-bg");
const closeBasketBtn = document.querySelector(".close-btn");

function toggleBasket() {
  basketModal.classList.toggle("hidden");
}

openBasketBtn.addEventListener("click", toggleBasket);
closeBasketBtn.addEventListener("click", toggleBasket);

// Hamburger
const hamburgerToggle = document.getElementById("hamburger-toggle");
const hamburgerMenu = document.querySelector(".hamburger-menu");

function toggleHamburger() {
  hamburgerMenu.classList.toggle("hidden");
}

hamburgerToggle.addEventListener("click", toggleHamburger);
