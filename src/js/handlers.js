import { refs } from './refs';
import { clearFieldError } from './validation';
import { openProductModal, closeProductModal } from './product-modal.js';

export const openBurger = () => {
  refs.burger.classList.add('is-open');
  refs.body.classList.add('scroll-lock');
};

export const closeBurger = () => {
  refs.burger.classList.remove('is-open');
  refs.body.classList.remove('scroll-lock');
};

// !!! ORDER MODAL !!!

function resetOrderForm() {
  if (!refs.orderForm) return;

  refs.orderForm.reset();

  const fields = [
    refs.orderForm.elements.name,
    refs.orderForm.elements.phone,
    refs.orderForm.elements.comment,
  ];
  fields.forEach(field => {
    if (field) clearFieldError(field);
  });
}

function onOrderEscKey(e) {
  if (e.key === 'Escape') closeOrderModal();
}

export const openOrderModal = () => {
  refs.orderBackdrop.classList.add('is-open');
  refs.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onOrderEscKey);
};

export const closeOrderModal = () => {
  refs.orderBackdrop.classList.remove('is-open');
  refs.body.style.overflow = '';
  document.removeEventListener('keydown', onOrderEscKey);
  resetOrderForm();
};

if (refs.orderCloseBtn) {
  refs.orderCloseBtn.addEventListener('click', closeOrderModal);
}

if (refs.orderBackdrop) {
  refs.orderBackdrop.addEventListener('click', event => {
    if (event.target === refs.orderBackdrop) closeOrderModal();
  });
}

// !!! PRODUCT MODAL !!!

if (refs.productCloseBtn) {
  refs.productCloseBtn.addEventListener('click', closeProductModal);
}

if (refs.productBackdrop) {
  refs.productBackdrop.addEventListener('click', event => {
    if (event.target === refs.productBackdrop) closeProductModal();
  });
}

// !!! OPEN ORDER FROM PRODUCT !!!

if (!refs.dessertIdInput) {
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'dessertId';
  refs.orderForm.appendChild(hiddenInput);
  refs.dessertIdInput = hiddenInput;
}

refs.orderOpenBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    refs.dessertIdInput.value = btn.dataset.dessertId;
    closeProductModal();
    openOrderModal();
  });
});

// !!! FILL PRODUCT MODAL !!!

export function fillProductModal(d) {
  const img = document.querySelector('.product-img');
  img.src = d.image;
  img.alt = d.name;

  document.querySelector('.product-title').textContent = d.name;
  document.querySelector('.product-price').textContent = `${d.price} грн`;

  const ratingContainer = document.querySelector('.product-rating');
  ratingContainer.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = i <= d.rate ? '★' : '☆';
    star.style.fontSize = '16px';
    star.style.color = '#080c0c';
    ratingContainer.appendChild(star);
  }

  document.querySelector('.product-desc').textContent = d.description;
  document.querySelector('.composition-value').textContent = d.composition;

  const orderBtn = document.querySelector('[data-order-open]');
  orderBtn.dataset.dessertId = d._id;
}
