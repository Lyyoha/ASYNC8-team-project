import 'css-star-rating/css/star-rating.css';

const createRatingMarkup = rating => {
  const value = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return `
    <div class="rating value-${value} ${hasHalf ? 'half' : ''}">
      <div class="star-container">
        ${[1, 2, 3, 4, 5]
          .map(
            () => `
          <div class="star">
            <svg class="star-empty" style="fill: var(--color-scheme-1-text)">
                <use href="/img/sprite.svg#star-empty"></use>
            </svg>
             <svg class="star-half" style="fill: var(--color-scheme-1-text)">
                <use href="/img/sprite.svg#star-half"></use>
            </svg>
            <svg class="star-filled" style="fill: var(--color-scheme-1-text)">
                <use href="/img/sprite.svg#star-filled"></use>
            </svg>
        </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
};

export const createFeedbackCard = ({ _id, rate, description, author }) => {
  return `<li class="swiper-slide feedback-item" data-id="${_id}">
  <div class="feedback-item-rate">${createRatingMarkup(rate)}</div>
  <p class="feedback-item-description">"${description}"</p>
  <h3 class="feedback-item-author">${author}</h3>
</li>`;
};

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
        <div class="desert-card-footer">
          <p class="desert-card-price">${price} грн</p>
          <button class="desert-card-arrow" type="button" aria-label="Переглянути ${safeName}">
            <svg class="desert-card-arrow-icon" width="24" height="24">
              <use href="/img/sprite.svg#desert-card-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `;
}

export function cardsTemplate(arr) {
  return arr.map(cardTemplate).join('');
}

export function categoriesTemplate(arr) {
  const all = `<li><button type="button" class="desert-chip is-active" data-id="">Всі десерти</button></li>`;

  const rest = arr
    .map(
      ({ _id, name }) =>
        `<li><button type="button" class="desert-chip" data-id="${_id}">${escapeHtml(name)}</button></li>`
    )
    .join('');

  return all + rest;
}

export function categoriesSelectTemplate(arr) {
  const all = `<option value="">Всі десерти</option>`;

  const rest = arr
    .map(
      ({ _id, name }) => `<option value="${_id}">${escapeHtml(name)}</option>`
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
