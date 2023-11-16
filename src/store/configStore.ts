import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import arrResReducer from './arrResSlice';
import arrResCardReducer from './arrResCardSlice';
import { getAnime } from '../api/getAnimeRedux';

const configStore = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    arrRes: arrResReducer,
    arrResCard: arrResCardReducer,
    [getAnime.reducerPath]: getAnime.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(getAnime.middleware),
});

export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
export default configStore;
