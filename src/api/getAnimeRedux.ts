import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  API_URL,
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
} from '../utils/constants/constants';

export const getAnime = createApi({
  reducerPath: 'getAnime',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}?` }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: ({ pageNum = 1, limitNum = 25, query = '' }) =>
        `sfw=true&${`${API_PAGE}${pageNum}`}&${`${API_LIMIT}${limitNum}`}${
          query ? `&${API_SEARCH_PARAM}${query}` : ''
        }`,
    }),
  }),
});

export const { useGetAnimeQuery } = getAnime;
