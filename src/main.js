import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import { closeBurger, openBurger } from "./js/handlers";
import { refs } from "./js/refs";
import { initDesserts } from "./js/desserts-list";

new Accordion(".faq-list", {
  elementClass: "faq-list-item",
  triggerClass: "faq-acordion-btn",
  panelClass: "faq-accordion",
});

initDesserts();

// header

refs.burgerBtn.addEventListener("click", openBurger);
refs.burgerBtnClose.addEventListener("click", closeBurger);
refs.burgerMenuLink.addEventListener("click", closeBurger);
refs.burgerMenuBtn.addEventListener("click", closeBurger);

console.log();
