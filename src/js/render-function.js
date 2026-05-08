import 'css-star-rating/css/star-rating.css';

const createRatingMarkup = rating => {
  const value = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return `
    <div class="rating value-${value} ${hasHalf ? 'half' : ''} color-default">
      <div class="star-container">
        ${[1, 2, 3, 4, 5]
          .map(
            () => `
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
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
