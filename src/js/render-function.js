export const createFeedbackCard = ({ _id, rate, description, author }) => {
  return `<li class="swiper-slide feedback-item" data-id="${_id}">
  <div class="feedback-item-rate">${rate}</div>
  <h3 class="feedback-item-author">${author}</h3>
  <p class="feedback-item-description">${description}</p>
</li>`;
};
