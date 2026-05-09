import axios from "axios";

axios.defaults.baseURL = "https://deserts-store.b.goit.study/api";

export async function fetchDessertById(id) {
  const { data } = await axios.get(`/desserts/${id}`);
  return data;
}
