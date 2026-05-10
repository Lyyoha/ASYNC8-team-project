import { refs } from './refs';

export const openBurger = () => {
  refs.burger.classList.add('is-open');
  refs.body.classList.add('scroll-lock');
};

export const closeBurger = () => {
  refs.burger.classList.remove('is-open');
  refs.body.classList.remove('scroll-lock');
};

// ORDER MODAL

// Відкрити order modal
export const openOrderModal = () => {
  refs.orderBackdrop.classList.add('is-open');
  refs.body.style.overflow = 'hidden';
};

// Закрити order modal
export const closeOrderModal = () => {
  refs.orderBackdrop.classList.remove('is-open');
  refs.body.style.overflow = '';

  // очищаємо форму
  refs.orderForm.reset();

  // очищаємо textarea вручну
  refs.orderForm.comment.value = '';
};

// Закриття по кнопці
if (refs.orderCloseBtn) {
  refs.orderCloseBtn.addEventListener('click', closeOrderModal);
}

// Закриття по кліку на backdrop
if (refs.orderBackdrop) {
  refs.orderBackdrop.addEventListener('click', event => {
    if (event.target === refs.orderBackdrop) {
      closeOrderModal();
    }
  });
}

// Закриття по Escape
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeOrderModal();
  }
});

// PRODUCT MODAL

// Відкрити product modal
// // export const openProductModal = () => {
//   refs.productBackdrop.classList.add("is-open");
//   refs.body.style.overflow = "hidden";
// };

// // Закрити product modal
// export const closeProductModal = () => {
//   refs.productBackdrop.classList.remove("is-open");
//   refs.body.style.overflow = "";
// };

// Закриття по кнопці
// if (refs.productCloseBtn) {
//   refs.productCloseBtn.addEventListener('click', closeProductModal);
// }
// // Закриття по кліку на backdrop
// if (refs.productBackdrop) {
//   refs.productBackdrop.addEventListener('click', event => {
//     if (event.target === refs.productBackdrop) {
//       closeProductModal();
//     }
//   });
// }

// Закриття по Escape
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     closeProductModal();
//   }
// });

// OPEN ORDER MODAL FROM PRODUCT MODAL

// Якщо прихованого поля dessertId немає — створюємо
if (!refs.dessertIdInput) {
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'dessertId';
  refs.orderForm.appendChild(hiddenInput);
  refs.dessertIdInput = hiddenInput; // записуємо в refs
}

// Вішаємо слухачі на всі кнопки "Перейти до замовлення"
refs.orderOpenBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.dessertId;

    refs.dessertIdInput.value = id;

    // closeProductModal();
    // openOrderModal();
  });
});

// d --> dessert
export function fillProductModal(d) {
  // Картинка
  const img = document.querySelector('.product-img');
  img.src = d.image;
  img.alt = d.name;

  // Назва
  document.querySelector('.product-title').textContent = d.name;

  // Ціна
  document.querySelector('.product-price').textContent = `${d.price} грн`;

  // Рейтинг (зірочки)
  const ratingContainer = document.querySelector('.product-rating');
  ratingContainer.innerHTML = ''; // очищаємо

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = i <= d.rate ? '★' : '☆';
    star.style.fontSize = '16px';
    star.style.color = '#080c0c';
    ratingContainer.appendChild(star);
  }

  // Опис
  document.querySelector('.product-desc').textContent = d.description;

  // Склад
  document.querySelector('.composition-value').textContent = d.composition;

  // Передаємо ID у order modal
  const orderBtn = document.querySelector('[data-order-open]');
  orderBtn.dataset.dessertId = d._id;
}
