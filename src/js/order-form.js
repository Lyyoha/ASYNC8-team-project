import { createOrder } from "./order-api";
import { addFieldError, clearFieldError } from "./validation";
import { successToast, errorToast } from "./toast";
import { closeOrderModal } from "./handlers";
import { refs } from "./refs";

export const onOrderFormSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector(".order-submit-btn");

  // Очищаємо попередні помилки
  const fields = [
    form.elements.name,
    form.elements.phone,
    form.elements.comment,
  ];

  fields.forEach((field) => clearFieldError(field));

  // Перевіряємо обов'язкові поля
  let isValid = true;

  if (!form.elements.name.value.trim()) {
    addFieldError(form.elements.name, "Поле обов'язкове");
    isValid = false;
  }

  if (!form.elements.phone.value.trim()) {
    addFieldError(form.elements.phone, "Поле обов'язкове");
    isValid = false;
  }

  if (!form.elements.comment.value.trim()) {
    addFieldError(form.elements.comment, "Поле обов'язкове");
    isValid = false;
  }

  // Перевірка dessertId
  if (!form.elements.dessertId.value.trim()) {
    errorToast("Помилка: не передано ID десерту");
    return;
  }

  if (!isValid) return;

  // Формуємо об'єкт замовлення
  const order = {
    name: form.elements.name.value.trim(),
    phone: form.elements.phone.value.trim(),
    comment: form.elements.comment.value.trim(),
    dessertId: form.elements.dessertId.value.trim(),
  };

  try {
    submitBtn.disabled = true;

    await createOrder(order);

    successToast("Ваше замовлення успішно відправлено!");

    form.reset();
    closeOrderModal();
  } catch (err) {
    console.log(err);
    errorToast("Сталася помилка при створенні замовлення.");
  } finally {
    submitBtn.disabled = false;
  }
};
