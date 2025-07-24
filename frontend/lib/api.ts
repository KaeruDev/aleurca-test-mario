import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getServices = async () => {
  const res = await axios.get(`${API_URL}/services`);
  return res.data;
};
