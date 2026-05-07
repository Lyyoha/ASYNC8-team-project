// !!! ORDER MODAL HANDLERS !!! //

var orderBackdrop = document.querySelector("[data-order-backdrop]");
var orderModal = document.querySelector("[data-order-modal]");
var orderCloseBtn = document.querySelector("[data-order-close]");

// Відкрити order modal
export const openOrderModal = () => {
  orderBackdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

// Закрити order modal
export const closeOrderModal = () => {
  orderBackdrop.classList.remove("is-open");
  document.body.style.overflow = "";
};

// Закриття по кнопці
orderCloseBtn.addEventListener("click", () => closeOrderModal());

// Закриття по кліку на backdrop
orderBackdrop.addEventListener("click", (event) => {
  if (event.target === orderBackdrop) {
    closeOrderModal();
  }
});

// Закриття по Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeOrderModal();
  }
});

// !!! PRODUCT MODAL HANDLERS !!! //

var productBackdrop = document.querySelector("[data-product-backdrop]");
var productModal = document.querySelector("[data-product-modal]");
var productCloseBtn = document.querySelector("[data-product-close]");

// Відкрити product modal
export const openProductModal = () => {
  productBackdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

// Закрити product modal
export const closeProductModal = () => {
  productBackdrop.classList.remove("is-open");
  document.body.style.overflow = "";
};

// Закриття по кнопці
productCloseBtn.addEventListener("click", () => closeProductModal());

// Закриття по кліку на backdrop
productBackdrop.addEventListener("click", (event) => {
  if (event.target === productBackdrop) {
    closeProductModal();
  }
});

// Закриття по Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductModal();
  }
});

// !!! OPEN ORDER MODAL FROM PRODUCT MODAL !!! //

// Знаходимо всі кнопки "Перейти до замовлення"
var orderOpenBtns = document.querySelectorAll("[data-order-open]");

// Створюємо приховане поле для dessertId, якщо його немає
var dessertIdInput = document.querySelector('[name="dessertId"]');

if (!dessertIdInput) {
  dessertIdInput = document.createElement("input");
  dessertIdInput.type = "hidden";
  dessertIdInput.name = "dessertId";
  document.querySelector("[data-order-form]").appendChild(dessertIdInput);
}

// Вішаємо слухачі на всі кнопки
orderOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var id = btn.getAttribute("data-dessert-id");

    // передаємо ID у форму
    dessertIdInput.value = id;

    // відкриваємо order modal
    openOrderModal();
  });
});
