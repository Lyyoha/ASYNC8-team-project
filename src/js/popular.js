import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { refs } from './refs';

const BASE_URL = 'https://deserts-store.b.goit.study/api';

const fetchPopularProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/desserts`, {
      params: {
        type: 'popular',
      },
    });

    console.log('Дані отримано:', data);
    return data;
  } catch (error) {
    console.error('Помилка запиту:', error);
    return [];
  }
};

const createCardMarkup = ({
  _id,
  image,
  category,
  name,
  description,
  price,
}) => `
    <li class="swiper-slide" data-id="${_id}">
      <article class="product-card">
        <div class="img-thumb">
          <img src="${image}" alt="${name}" loading="lazy" />
        </div>
        <div class="card-content">
          <p class="category">${category.name}</p>
          <h3 class="name">${name}</h3>
          <p class="description">${description}</p>
          <div class="card-footer">
            <span class="price">${price} грн</span>
            <button type="button" class="order-link-btn" aria-label="Детальна інформація">
              <svg width="20" height="20">
                <use href="../img/sprite.svg#arrow_outward"></use>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </li>
  `;

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
