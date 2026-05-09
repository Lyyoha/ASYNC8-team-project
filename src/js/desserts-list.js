import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';
import { getCategories, getDesserts } from './desserts-api';
import {
  cardsTemplate,
  categoriesTemplate,
  categoriesSelectTemplate,
  skeletonsTemplate,
} from './render-function';

const state = {
  page: 1,
  limit: 9,
  category: '',
  totalItems: 0,
  loaded: 0,
};

export async function initDesserts() {
  if (!refs.desertsList) return;

  refs.desertsCategories?.addEventListener('click', onCategoryClick);
  refs.desertsCategoriesSelect?.addEventListener('change', onCategoryChange);
  refs.desertsLoadMore?.addEventListener('click', onLoadMore);
  refs.desertsList.addEventListener('click', onCardClick);

  showSkeletons();

  try {
    const [first, cats] = await Promise.all([
      getDesserts({ page: 1, limit: state.limit }),
      getCategories(),
    ]);

    if (refs.desertsCategories) {
      refs.desertsCategories.innerHTML = categoriesTemplate(cats);
    }

    if (refs.desertsCategoriesSelect) {
      refs.desertsCategoriesSelect.innerHTML = categoriesSelectTemplate(cats);
    }

    state.totalItems = first.totalItems;
    state.loaded = first.desserts.length;
    state.page = 1;

    renderCards(first.desserts, 'replace');
    updateEmpty();
    updateLoadMore();
  } catch (err) {
    refs.desertsList.innerHTML = '';
    state.loaded = 0;

    updateEmpty();
    notifyError(err);
  }
}

function onCategoryClick(e) {
  const btn = e.target.closest('.desert-chip');
  if (!btn) return;

  const id = btn.dataset.id || '';
  setActiveCategory(id);
}

function onCategoryChange(e) {
  const id = e.target.value || '';
  setActiveCategory(id);
}

async function setActiveCategory(id) {
  if (id === state.category) return;

  syncActiveCategoryUI(id);

  state.category = id;
  state.page = 1;
  state.loaded = 0;

  showSkeletons();
  refs.desertsLoadMore.hidden = true;

  try {
    const data = await getDesserts({
      page: 1,
      limit: state.limit,
      category: id || null,
    });

    state.totalItems = data.totalItems;
    state.loaded = data.desserts.length;

    renderCards(data.desserts, 'replace');
    updateEmpty();
    updateLoadMore();
  } catch (err) {
    refs.desertsList.innerHTML = '';

    updateEmpty();
    notifyError(err);
  }
}

function syncActiveCategoryUI(id) {
  if (refs.desertsCategories) {
    refs.desertsCategories
      .querySelectorAll('.desert-chip')
      .forEach(b => b.classList.toggle('is-active', b.dataset.id === id));
  }

  if (refs.desertsCategoriesSelect && refs.desertsCategoriesSelect.value !== id) {
    refs.desertsCategoriesSelect.value = id;
  }
}

async function onLoadMore() {
  refs.desertsLoadMore.disabled = true;
  const nextPage = state.page + 1;

  try {
    const data = await getDesserts({
      page: nextPage,
      limit: state.limit,
      category: state.category || null,
    });

    state.page = nextPage;
    state.totalItems = data.totalItems;
    state.loaded += data.desserts.length;

    renderCards(data.desserts, 'append');
    updateLoadMore();
  } catch (err) {
    notifyError(err);
  } finally {
    refs.desertsLoadMore.disabled = false;
  }
}

function onCardClick(e) {
  const card = e.target.closest('.desert-card');
  if (!card || card.classList.contains('desert-card--skeleton')) return;

  const id = card.dataset.id;
  if (!id) return;

  document.dispatchEvent(new CustomEvent('dessert:open', { detail: { id } }));
}

function showSkeletons() {
  refs.desertsList.hidden = false;
  if (refs.desertsEmpty) refs.desertsEmpty.hidden = true;

  refs.desertsList.innerHTML = skeletonsTemplate(state.limit);
}

function renderCards(arr, mode) {
  const html = cardsTemplate(arr);

  if (mode === 'replace') {
    refs.desertsList.innerHTML = html;
  } else {
    refs.desertsList.insertAdjacentHTML('beforeend', html);
  }

  wireImageFade();
}

function wireImageFade() {
  const imgs = refs.desertsList.querySelectorAll(
    'img.desert-card-img:not(.is-loaded)'
  );

  imgs.forEach(img => {
    if (img.complete) {
      img.classList.add('is-loaded');
      return;
    }

    img.addEventListener('load', () => img.classList.add('is-loaded'));
    img.addEventListener('error', () => img.classList.add('is-loaded'));
  });
}

function updateEmpty() {
  if (!refs.desertsEmpty) return;

  const empty = state.loaded === 0;
  refs.desertsEmpty.hidden = !empty;
  refs.desertsList.hidden = empty;
}

function updateLoadMore() {
  if (!refs.desertsLoadMore) return;

  const hasMore = state.loaded < state.totalItems;
  refs.desertsLoadMore.hidden = !hasMore;
}

function notifyError(err) {
  iziToast.error({
    title: 'Помилка',
    message: err.message || 'Не вдалося завантажити десерти',
    position: 'topRight',
  });
}
