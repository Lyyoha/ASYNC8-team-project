export function addFieldError(fieldEl, message) {
  // Додаємо клас помилки
  fieldEl.classList.add("error");

  // Якщо помилка вже існує — не створюємо другу
  if (
    fieldEl.nextElementSibling?.classList.contains("input-error-text") ||
    fieldEl.nextElementSibling?.classList.contains("textarea-error-text")
  ) {
    return;
  }

  // Створюємо елемент тексту помилки
  const errorText = document.createElement("p");
  errorText.textContent = message;

  // Вибираємо правильний клас
  if (fieldEl.tagName === "TEXTAREA") {
    errorText.classList.add("textarea-error-text");
  } else {
    errorText.classList.add("input-error-text");
  }

  // Додаємо після поля
  fieldEl.insertAdjacentElement("afterend", errorText);
}

export function clearFieldError(fieldEl) {
  fieldEl.classList.remove("error");

  const next = fieldEl.nextElementSibling;

  if (
    next &&
    (next.classList.contains("input-error-text") ||
      next.classList.contains("textarea-error-text"))
  ) {
    next.remove();
  }
}
