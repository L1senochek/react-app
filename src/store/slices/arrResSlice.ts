import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IAnime from '../../model/api/IAnime';
import IArrResState from '../../model/store/IArrResState';

const initialState: IArrResState = {
  arrRes: undefined,
};

const arrResSlice = createSlice({
  name: 'arrRes',
  initialState,
  reducers: {
    setArrRes(state, action: PayloadAction<IAnime>) {
      state.arrRes = action.payload;
    },
  },
});

export const { setArrRes } = arrResSlice.actions;
export default arrResSlice.reducer;
