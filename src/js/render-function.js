const HTML_ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => HTML_ENTITIES[char]);
}

function cardTemplate({ _id, name, description, price, image, category }) {
  const safeName = escapeHtml(name);
  const safeDesc = escapeHtml(description);
  const safeCat = escapeHtml(category?.name ?? '');

  return `
    <li class="desert-card" data-id="${_id}">
      <img class="desert-card-img" src="${image}" alt="${safeName}" loading="lazy" />
      <div class="desert-card-body">
        <p class="desert-card-category">${safeCat}</p>
        <h3 class="desert-card-title">${safeName}</h3>
        <p class="desert-card-description">${safeDesc}</p>
        <p class="desert-card-price">${price} грн</p>
      </div>
    </li>
  `;
}

export function cardsTemplate(arr) {
  return arr.map(cardTemplate).join('');
}

export function categoriesTemplate(arr) {
  const all = `<li><button type="button" class="desert-chip is-active" data-id="">Усі</button></li>`;

  const rest = arr
    .map(
      ({ _id, name }) =>
        `<li><button type="button" class="desert-chip" data-id="${_id}">${escapeHtml(name)}</button></li>`
    )
    .join('');

  return all + rest;
}

export function skeletonsTemplate(count = 6) {
  const item = `
    <li class="desert-card desert-card--skeleton">
      <div class="desert-skeleton-thumb desert-skeleton-shimmer"></div>
      <div class="desert-card-body">
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--title desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-shimmer"></div>
        <div class="desert-skeleton-line desert-skeleton-line--short desert-skeleton-shimmer"></div>
      </div>
    </li>
  `;
  return item.repeat(count);
}
