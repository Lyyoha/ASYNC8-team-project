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
import { initDesserts } from './js/desserts-list';
import { createCardMarkup } from './js/render-function';
import { getPopularProdacts } from './js/desserts-api';

new Accordion('.faq-list', {
  elementClass: 'faq-list-item',
  triggerClass: 'faq-acordion-btn',
  panelClass: 'faq-accordion',
});
initDesserts();

// header

refs.burgerBtn.addEventListener('click', openBurger);
refs.burgerBtnClose.addEventListener('click', closeBurger);
refs.burgerMenuLink.addEventListener('click', closeBurger);
refs.burgerMenuBtn.addEventListener('click', closeBurger);

//

const fetchPopularProducts = async () => {
  try {
    const data = await getPopularProdacts();

    console.log('Дані отримано:', data);
    return data;
  } catch (error) {
    console.error('Помилка запиту:', error);
    return [];
  }
};

const initSwiper = () => {
  new Swiper('.popular-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: '.popular-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.popular-swiper-button-next',
      prevEl: '.popular-swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    watchOverflow: true,
  });
};
export const renderPopularSection = async () => {
  try {
    const data = await fetchPopularProducts();

    if (!data || !data.desserts || data.desserts.length === 0) {
      refs.popularList.innerHTML =
        '<p>На жаль, популярні товари зараз недоступні.</p>';
      return;
    }

    const markup = data.desserts.map(createCardMarkup).join('');
    refs.popularList.innerHTML = markup;

    initSwiper();
  } catch (error) {
    console.error('Помилка рендерингу секції:', error);
    refs.popularList.innerHTML =
      '<p>Сталася помилка при завантаженні даних.</p>';
  }
};
renderPopularSection();
// feedback

let feedbackSwiper = null;

const renderFeedbackList = async () => {
  try {
    const feedbackArr = await getAllFeedbacks();

    const feedbackCardsTemplate = feedbackArr
      .map(card => createFeedbackCard(card))
      .join('');

    refs.feedbackList.innerHTML = feedbackCardsTemplate;

    initFeedbackSwiper();
  } catch (error) {
    console.log(error);
  }
};

const initFeedbackSwiper = () => {
  if (feedbackSwiper) {
    feedbackSwiper.destroy(true, true);
  }

  feedbackSwiper = new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: false,
    spaceBetween: 24,
    pagination: {
      el: '.feedback-swiper-control .swiper-pagination',
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

// about-us swiper

const mediaQuery = window.matchMedia('(min-width: 768px)');
let aboutSwiper = null;

const toggleSwiper = () => {
  if (mediaQuery.matches && !aboutSwiper) {
    aboutSwiper = new Swiper('.about-us-slider .swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 24,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.about-us-pagination',
        clickable: true,
      },
    });
  } else if (!mediaQuery.matches && aboutSwiper) {
    aboutSwiper.destroy(true, true);
    aboutSwiper = null;
  }
};

toggleSwiper();
mediaQuery.addEventListener('change', toggleSwiper);
