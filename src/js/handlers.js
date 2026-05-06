import { refs } from "./refs";

export const openBurger = () => refs.burger.classList.add("is-open");

export const closeBurger = () => refs.burger.classList.remove("is-open");
