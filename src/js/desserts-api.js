import axios from 'axios';

axios.defaults.baseURL = 'https://deserts-store.b.goit.study/api';

export const getAllFeedbacks = async () => {
  const { data } = await axios.get('/feedbacks?limit=10&page=1');

  return data.feedbacks;
};
