import { createSlice } from '@reduxjs/toolkit';

const arrResSlice = createSlice({
  name: 'arrRes',
  initialState: { arrRes: undefined },
  reducers: {
    setArrRes(state, action) {
      state.arrRes = action.payload;
    },
  },
});

export const { setArrRes } = arrResSlice.actions;

export default arrResSlice.reducer;
