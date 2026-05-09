import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { refs } from './refs';
import { getPopularProdacts } from './desserts-api';
import { createCardMarkup } from './render-function';

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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

const renderPopularSection = async () => {
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
