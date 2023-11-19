import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IArrResCardState from '../model/store/IArrResCardState';
import IAnimeResData from '../model/api/IAnimeResData';

const initialState: IArrResCardState = {
  arrResCard: undefined,
};

const arrResCardSlice = createSlice({
  name: 'arrResCard',
  initialState,
  reducers: {
    setArrResCard(state, action: PayloadAction<IAnimeResData>) {
      state.arrResCard = action.payload;
    },
  },
});

export const { setArrResCard } = arrResCardSlice.actions;
export default arrResCardSlice.reducer;
