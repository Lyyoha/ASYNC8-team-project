// src/js/category-select.js

import Choices from 'choices.js';

const DEFAULTS = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  allowHTML: false,
  position: 'bottom',
  labelId: 'desert-categories-select-label',
  classNames: {
    containerOuter: ['choices', 'category-select'],
  },
  callbackOnCreateTemplates: function () {
    return {
      containerOuter: function (
        options,
        dir,
        isSelectElement,
        isSelectOneElement,
        searchEnabled,
        passedElementType,
        labelId
      ) {
        const div = document.createElement('div');
        const classNames = options.classNames.containerOuter || [];
        const classes = Array.isArray(classNames) ? classNames : [classNames];
        classes.forEach(className => div.classList.add(className));

        div.dataset.type = passedElementType;

        if (dir) {
          div.dir = dir;
        }

        if (isSelectOneElement) {
          div.tabIndex = 0;
        }

        if (isSelectElement) {
          div.setAttribute('role', 'combobox');
          div.setAttribute('aria-haspopup', 'true');
          div.setAttribute('aria-expanded', 'false');
        }

        if (labelId) {
          div.setAttribute('aria-labelledby', labelId);
        }

        return div;
      },
      itemList: function (
        { searchEnabled, classNames: { list, listSingle, listItems } },
        isSelectOneElement
      ) {
        const div = document.createElement('div');
        const classes = Array.isArray(list) ? list : [list];
        classes.forEach(className => div.classList.add(className));
        div.classList.add(isSelectOneElement ? listSingle : listItems);

        if (isSelectOneElement) {
          div.setAttribute('role', 'listbox');
        }

        return div;
      },
    };
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
