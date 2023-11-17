import { createSlice } from '@reduxjs/toolkit';

const arrResCardSlice = createSlice({
  name: 'arrResCard',
  initialState: { arrResCard: undefined },
  reducers: {
    setArrResCard(state, action) {
      state.arrResCard = action.payload;
    },
  },
});

export const { setArrResCard } = arrResCardSlice.actions;
export default arrResCardSlice.reducer;
