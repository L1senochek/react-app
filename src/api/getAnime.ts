import IAnime from '../model/api/IAnime';
import { API_URL } from '../utils/constants/constants';

export const getAnime: () => Promise<IAnime> = async () => {
  return await (await fetch(API_URL)).json();
};

export default getAnime;
