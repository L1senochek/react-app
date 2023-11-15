import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_VALUE } from '../utils/constants/constants';

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: {
    searchValue: localStorage.getItem(SEARCH_VALUE) || '',
  },
  reducers: {
    setSearchValue(state, action) {
      const { payload } = action;
      state.searchValue = payload;
    },
    setSearchValueLS(state, action) {
      const { payload } = action;
      localStorage.setItem(SEARCH_VALUE, payload);
    },
    removeSearchValue(state) {
      state.searchValue = '';
      localStorage.removeItem(SEARCH_VALUE);
    },
  },
});

export const { setSearchValue, setSearchValueLS, removeSearchValue } =
  searchValueSlice.actions;

export default searchValueSlice.reducer;
