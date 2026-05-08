// Використовуємо axios для HTTP‑запитів до сервера
import axios from "axios";

// приймає об’єкт замовлення, відправляє його на сервер і повертає відповідь
export const createOrder = async (order) => {
  const { data } = await axios.post("/orders", order);
  return data;
};
