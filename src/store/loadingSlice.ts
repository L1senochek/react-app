import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    cardsLoading: false,
    cardsInfoLoading: false,
  },
  reducers: {
    setCardsLoading: (state, action) => {
      state.cardsLoading = action.payload;
    },
    setCardsInfoLoading: (state, action) => {
      state.cardsInfoLoading = action.payload;
    },
  },
});

export const { setCardsLoading, setCardsInfoLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
