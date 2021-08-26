const openBasketBtn = document.getElementById("open-basket");
const basketModal = document.querySelector(".basket-modal-bg");
const closeBasketBtn = document.querySelector(".close-btn");

function toggleBasket() {
  basketModal.classList.toggle("hidden");
  console.log("toggle!");
}

openBasketBtn.addEventListener("click", toggleBasket);
closeBasketBtn.addEventListener("click", toggleBasket);
