import IAnime from '../model/api/IAnime';
import { API_SEARCH_PARAM, API_URL } from '../utils/constants/constants';

const getSearch: (searchValue: string) => Promise<IAnime> = async (
  searchValue
) => await (await fetch(API_URL + API_SEARCH_PARAM + searchValue)).json();

export default getSearch;
