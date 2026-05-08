export const refs = {
  body: document.body,

  // BURGER MENU
  burger: document.querySelector(".burger-container"),
  burgerBtn: document.querySelector(".burger-icon"),
  burgerBtnClose: document.querySelector(".btn-close"),
  burgerMenuLink: document.querySelector(".menu-link"),
  burgerMenuBtn: document.querySelector(".button-menu"),

  // ORDER MODAL
  orderBackdrop: document.querySelector("[data-order-backdrop]"),
  orderModal: document.querySelector("[data-order-modal]"),
  orderCloseBtn: document.querySelector("[data-order-close]"),
  orderForm: document.querySelector("[data-order-form]"),
  dessertIdInput: document.querySelector('[name="dessertId"]'),

  // PRODUCT MODAL
  productBackdrop: document.querySelector("[data-product-backdrop]"),
  productModal: document.querySelector("[data-product-modal]"),
  productCloseBtn: document.querySelector("[data-product-close]"),

  // BUTTONS
  orderOpenBtns: document.querySelectorAll("[data-order-open]"),
};
