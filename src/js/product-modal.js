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
function renderRatingStars(container, rate) {
  container.innerHTML = '';

  const max = 5;
  const value = Number(rate) || 0;

  for (let i = 1; i <= max; i++) {
    const star = document.createElement('span');
    star.textContent = i <= value ? '★' : '☆';
    container.appendChild(star);
  }
}

// !!! ЗАПОВНЕННЯ МОДАЛКИ
function fillProductModal(d) {
  refs.productModal.querySelector('.product-img').src = d.image;
  refs.productModal.querySelector('.product-img').alt = d.name;

  refs.productModal.querySelector('.product-title').textContent = d.name;
  refs.productModal.querySelector('.product-price').textContent =
    `${d.price} грн`;
  refs.productModal.querySelector('.product-desc').textContent = d.description;
  refs.productModal.querySelector('.composition-value').textContent =
    d.composition;

  renderRatingStars(refs.productModal.querySelector('.product-rating'), d.rate);

  // Зберегаю id для Order Modal
  refs.productModal.dataset.dessertId = d._id;
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
