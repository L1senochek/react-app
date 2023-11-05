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
) => Promise<IAnime> = async (pageValue, limitValue, searchValue = '') => {
  const res = await fetch(
    `${API_URL}${searchValue || pageValue || limitValue ? '?' : ''}${
      searchValue ? API_SEARCH_PARAM + searchValue : ''
    }${(searchValue && pageValue) || limitValue ? '&' : ''}${
      pageValue ? API_PAGE + pageValue : ''
    }${pageValue && limitValue ? '&' : ''}${
      limitValue ? API_LIMIT + limitValue : ''
    }`
  );
  return res.json();
};

export default getAnime;
