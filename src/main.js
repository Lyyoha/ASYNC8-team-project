import { closeBurger, openBurger } from "./js/handlers";
import { refs } from "./js/refs";
// header

refs.burgerBtn.addEventListener("click", openBurger);

refs.burgerBtnClose.addEventListener("click", closeBurger);

refs.burgerMenuLink.addEventListener("click", closeBurger);

refs.burgerMenuBtn.addEventListener("click", closeBurger);
