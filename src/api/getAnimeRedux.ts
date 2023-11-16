import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  API_URL,
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
} from '../utils/constants/constants';

export const getAnime = createApi({
  reducerPath: 'getAnime',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getAnime: build.query({
      query: (pageValue = 1, limitValue = 25, searchValue = '') =>
        `${API_URL}?sfw=true&${`${API_PAGE}${pageValue}`}&${`${API_LIMIT}${limitValue}`}${
          searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
        }`,
    }),
  }),
});

export const { useGetAnimeQuery } = getAnime;
