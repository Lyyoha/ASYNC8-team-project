import axios from 'axios';

axios.defaults.baseURL = 'https://deserts-store.b.goit.study/api';

export const getAllFeedbacks = async () => {
  const { data } = await axios.get('/feedbacks?limit=10&page=1');

  return data.feedbacks;
};


export async function getDesserts({ page = 1, limit = 9, category = null } = {}) {
  const params = { page, limit };
  if (category) params.category = category;
  const { data } = await axios.get('/desserts', { params });
  return data;
}

export async function getCategories() {
  const { data } = await axios.get('/categories');
  return data;
}

export async function getDessertById(id) {
  const { data } = await axios.get(`/desserts/${id}`);
  return data;
}

