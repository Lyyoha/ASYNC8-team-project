import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deserts-store.b.goit.study/api',
  timeout: 10000,
});

export async function getDesserts({ page = 1, limit = 9, category = null } = {}) {
  const params = { page, limit };
  if (category) params.category = category;
  const { data } = await api.get('/desserts', { params });
  return data;
}

export async function getCategories() {
  const { data } = await api.get('/categories');
  return data;
}

export async function getDessertById(id) {
  const { data } = await api.get(`/desserts/${id}`);
  return data;
}
