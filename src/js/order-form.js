import { addFieldError, clearFieldError } from './validation';
import { successToast, errorToast } from './toast';
import { closeOrderModal } from './handlers';
import { refs } from './refs';
import { postOrderForm } from './desserts-api';

function attachLiveValidation(form) {
  const fields = [
    form.elements.name,
    form.elements.phone,
    form.elements.comment,
  ];

  fields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        clearFieldError(field);
      }
    });
  });
}

export const onOrderFormSubmit = async event => {
  event.preventDefault();

  const form =
    event.currentTarget instanceof HTMLFormElement
      ? event.currentTarget
      : document.querySelector('.order-form');
  if (!form) return;

  const dessertIdField =
    form.elements.dessertId || form.querySelector('[name="dessertId"]');

  // Очищаємо попередні помилки
  const fields = [
    form.elements.name,
    form.elements.phone,
    form.elements.comment,
  ];
  fields.forEach(field => clearFieldError(field));

  // Валідація
  let isValid = true;

  if (!form.elements.name.value.trim()) {
    addFieldError(form.elements.name, "Поле обов'язкове");
    isValid = false;
  }

  const phoneValue = form.elements.phone.value.trim();
  const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/;

  if (!phoneValue) {
    addFieldError(form.elements.phone, "Поле обов'язкове");
    isValid = false;
  } else if (!phoneRegex.test(phoneValue)) {
    addFieldError(form.elements.phone, 'Введіть коректний номер телефону');
    isValid = false;
  }

  if (!form.elements.comment.value.trim()) {
    addFieldError(form.elements.comment, "Поле обов'язкове");
    isValid = false;
  }

  if (!isValid) return;

  const order = {
    name: form.elements.name.value.trim(),
    phone: form.elements.phone.value.trim(),
    comment: form.elements.comment.value.trim(),
    dessertId: dessertIdField?.value.trim(),
  };

  try {
    await postOrderForm(order);
    successToast('Ваше замовлення успішно відправлено!');
    form.reset();
    closeOrderModal();
  } catch (err) {
    console.error('Order submission failed:', err.response?.data || err);
    errorToast('Сталася помилка при створенні замовлення.');
    closeOrderModal();
  }
};

// Ініціалізація — викликай це після того як форма є в DOM
export function initOrderForm() {
  const form = refs.orderForm;
  if (!form) return;

  form.addEventListener('submit', onOrderFormSubmit);
  attachLiveValidation(form);
}
