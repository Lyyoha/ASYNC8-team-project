import { refs } from './refs.js';
import { fetchDessertById } from './desserts-api.js';

// !!! ВІДКРИТТЯ / ЗАКРИТТЯ
function openProductModal() {
  refs.productBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  refs.productBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

function onBackdropClick(e) {
  if (e.target === refs.productBackdrop) closeProductModal();
}

function onEscKey(e) {
  if (e.key === 'Escape') closeProductModal();
}

// !!! РЕНДЕР ЗІРОЧОК
function renderRatingStars(rate) {
  const max = 5;
  const value = Number(rate) || 0;

  return Array.from({ length: max }, (_, index) => {
    const isFilled = index + 1 <= value;
    return `<span>${isFilled ? '★' : '☆'}</span>`;
  }).join('');
}

// !!! ЗАПОВНЕННЯ МОДАЛКИ
export function fillProductModal(d) {
  if (!d) return;
  let modal = `  <!-- IMAGE -->
      <div class="product-img-wrapper">
        <img src="${d.image}" alt="${d.name}" class="product-img" />
      </div>

      <!-- CONTENT -->
      <div class="product-content">
        <!-- TITLE -->
        <h2 class="product-title">${d.name}</h2>

        <!-- PRICE -->
        <p class="product-price">${d.price} грн</p>

        <!-- RATING -->
        <div class="product-rating">${renderRatingStars(d.rate)}</div>

        <!-- DESCRIPTION -->
        <p class="product-desc">${d.description}</p>

        <!-- COMPOSITION -->
        <p class="product-composition">
          <span class="composition-label">Склад:</span>
          <span class="composition-value">${d.composition}</span>
        </p>

        <!-- ORDER BUTTON WRAPPER -->
        <div class="order-btn-wrapper">
          <button class="order-btn" data-order-open data-dessert-id="${d._id}">
            Перейти до замовлення
          </button>
        </div> </div>`;
  refs.productModal.innerHTML = modal;
}

// !!! ГОЛОВНА ФУНКЦІЯ
export async function openProductModalById(id) {
  try {
    const dessert = await fetchDessertById(id);
    fillProductModal(dessert);
    openProductModal();
  } catch (err) {
    console.error('Помилка завантаження десерту:', err);
  }
}

// !!! ІНІЦІАЛІЗАЦІЯ
export function initProductModal() {
  refs.productCloseBtn.addEventListener('click', closeProductModal);

  if (!refs.productCloseBtn || !refs.productBackdrop || !refs.productModal) {
    return;
  }

  refs.productBackdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKey);

  // СЛУХАЧ ПОДІЇ ВІД КАРТОК
  document.addEventListener('dessert:open', e => {
    openProductModalById(e.detail.id);
  });
}

export { closeProductModal, openProductModal };

// !!! ОЧИЩЕННЯ МОДАЛКИ (щоб не було видно попередні дані під час відкриття іншого продукту)
function clearProductModal() {
  refs.productModal.querySelector('.product-img').src = '';
  refs.productModal.querySelector('.product-title').textContent = '';
  refs.productModal.querySelector('.product-price').textContent = '';
  refs.productModal.querySelector('.product-rating').innerHTML = '';
  refs.productModal.querySelector('.product-desc').textContent = '';
  refs.productModal.querySelector('.composition-value').textContent = '';
}
