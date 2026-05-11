export function addFieldError(fieldEl, message) {
  // Знаходимо батьківський .order-field (для floating полів)
  const wrapper = fieldEl.closest('.order-field') ?? fieldEl.parentElement;

  // Додаємо клас помилки на інпут
  fieldEl.classList.add('error');

  // Якщо помилка вже є в wrapper — не дублюємо
  if (wrapper.querySelector('.input-error-text, .textarea-error-text')) {
    return;
  }

  // Створюємо елемент помилки
  const errorText = document.createElement('p');
  errorText.textContent = message;
  errorText.classList.add(
    fieldEl.tagName === 'TEXTAREA' ? 'textarea-error-text' : 'input-error-text'
  );

  // Додаємо в кінець wrapper-а (після інпута І label)
  wrapper.appendChild(errorText);
}

export function clearFieldError(fieldEl) {
  fieldEl.classList.remove('error');

  const wrapper = fieldEl.closest('.order-field') ?? fieldEl.parentElement;
  const errorEl = wrapper.querySelector(
    '.input-error-text, .textarea-error-text'
  );
  if (errorEl) errorEl.remove();
}
