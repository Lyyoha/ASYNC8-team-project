import { refs } from "./refs";

export const openBurger = () => {
  refs.burger.classList.add("is-open");
  refs.body.classList.add("scroll-lock");
};

export const closeBurger = () => {
  refs.burger.classList.remove("is-open");
  refs.body.classList.remove("scroll-lock");
};
