import { API_URL } from '../utils/constants/constants';

const getAnimeId: (id?: string) => Promise<Response> = async (id = '1') => {
  const res = await fetch(`${API_URL}/${id ? id : ''}`);
  return res.json();
};

export default getAnimeId;
