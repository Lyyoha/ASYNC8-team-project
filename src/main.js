import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import { closeBurger, openBurger } from "./js/handlers";
import { refs } from "./js/refs";

new Accordion(".faq-list", {
  elementClass: "faq-list-item",
  triggerClass: "faq-acordion-btn",
  panelClass: "faq-accordion",
});

// header

refs.burgerBtn.addEventListener("click", openBurger);
refs.burgerBtnClose.addEventListener("click", closeBurger);
refs.burgerMenuLink.addEventListener("click", closeBurger);
refs.burgerMenuBtn.addEventListener("click", closeBurger);

console.log();

const mediaQuery = window.matchMedia("(min-width: 768px)");
let swiper = null;
const toggleSwiper = () => {
  if (mediaQuery.matches && !swiper) {
    refs.wrapper.classList.add("swiper-wrapper");
    refs.items.forEach((item) => item.classList.add("swiper-slide"));
    swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (!mediaQuery.matches && swiper) {
    swiper.destroy(true, true);
    swiper = null;
    refs.wrapper.classList.remove("swiper-wrapper");
    refs.items.forEach((item) => item.classList.remove("swiper-slide"));
  }
};
toggleSwiper();
mediaQuery.addEventListener("change", toggleSwiper);
