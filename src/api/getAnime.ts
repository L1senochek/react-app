import IAnime from '../model/api/IAnime';
import {
  API_LIMIT,
  API_PAGE,
  API_SEARCH_PARAM,
  API_URL,
} from '../utils/constants/constants';

const getAnime: (
  searchValue?: string,
  pageValue?: number | string,
  limitValue?: number | string
) => Promise<IAnime> = async (searchValue = '', pageValue, limitValue) => {
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
