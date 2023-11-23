import { createSlice } from '@reduxjs/toolkit';

const limitSlice = createSlice({
  name: 'limit',
  initialState: {
    limit: '25',
  },
  reducers: {
    setlimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setlimit } = limitSlice.actions;
export default limitSlice.reducer;
