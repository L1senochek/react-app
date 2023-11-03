import IAnime from '../model/api/IAnime';
import { API_URL_SEARCH } from '../utils/constants/constants';

const getSearch: (searchValue: string) => Promise<IAnime> = async (
  searchValue
) => await (await fetch(API_URL_SEARCH + searchValue)).json();

export default getSearch;
