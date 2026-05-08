import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { closeBurger, openBurger } from './js/handlers';
import { refs } from './js/refs';
import { getAllFeedbacks } from './js/desserts-api';
import { createFeedbackCard } from './js/render-function';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Accordion('.faq-list', {
  elementClass: 'faq-list-item',
  triggerClass: 'faq-acordion-btn',
  panelClass: 'faq-accordion',
});

// header

refs.burgerBtn.addEventListener('click', openBurger);
refs.burgerBtnClose.addEventListener('click', closeBurger);
refs.burgerMenuLink.addEventListener('click', closeBurger);
refs.burgerMenuBtn.addEventListener('click', closeBurger);

console.log();

// feedback

let swiper = null;

const renderFeedbackList = async () => {
  try {
    const feedbackArr = await getAllFeedbacks();

    const feedbackCardsTemplate = feedbackArr
      .map(card => createFeedbackCard(card))
      .join('');

    refs.feedbackList.innerHTML = feedbackCardsTemplate;

    initSwiper();
  } catch (error) {
    console.log(error);
  }
};

const initSwiper = async () => {
  if (swiper) {
    swiper.destroy(true, true);
  }

  swiper = new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: false,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.feedback-swiper-btn-next',
      prevEl: '.feedback-swiper-btn-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
    },
    a11y: {
      prevSlideMessage: 'Попередній слайд',
      nextSlideMessage: 'Наступний слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
};

document.addEventListener('DOMContentLoaded', renderFeedbackList);
