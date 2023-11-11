import IAnime from '../model/api/IAnime';
import {
  API_LIMIT,
  API_PAGE,
  API_SEARCH_PARAM,
  API_URL,
} from '../utils/constants/constants';

const getAnime: (
  limitValue?: number | string,
  pageValue?: number | string,
  searchValue?: string
) => Promise<IAnime> = async (
  pageValue = 1,
  limitValue = 25,
  searchValue = ''
) => {
  const res = await fetch(
    `${API_URL}?sfw=true&${pageValue ? `${API_PAGE}${pageValue}` : ''}&${
      limitValue ? `${API_LIMIT}${limitValue}` : ''
    }${searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''}`
  );
  return res.json();
};

export default getAnime;
