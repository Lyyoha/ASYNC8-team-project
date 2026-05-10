import Choices from 'choices.js';

const DEFAULTS = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  allowHTML: false,
  position: 'bottom',
  classNames: {
    containerOuter: 'choices category-select',
  },
};

export function initCategorySelect(selectEl, { onChange } = {}) {
  if (!selectEl) return null;

  const instance = new Choices(selectEl, DEFAULTS);

  if (typeof onChange === 'function') {
    selectEl.addEventListener('change', e => onChange(e.target.value));
  }

  return instance;
}

export function setCategorySelectValue(instance, value) {
  if (!instance) return;
  instance.setChoiceByValue(value ?? '');
}

export function destroyCategorySelect(instance) {
  if (!instance) return;
  instance.destroy();
}
