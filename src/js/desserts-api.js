import axios from 'axios';

axios.defaults.baseURL = 'https://deserts-store.b.goit.study/api';

export async function fetchDessertById(id) {
  const { data } = await axios.get(`/desserts/${id}`);
  return data;
}

export async function getDesserts({
  page = 1,
  limit = 9,
  category = null,
} = {}) {
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

export const getPopularProdacts = async () => {
  const { data } = await axios.get(`/desserts`, {
    params: {
      type: 'popular',
    },
  });

  return data;
};
// !!! FEEDBACKS
export async function getAllFeedbacks() {
  const { data } = await axios.get('/feedbacks');
  return data;
}
