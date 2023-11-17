import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import arrResReducer from './arrResSlice';
import arrResCardReducer from './arrResCardSlice';
import { getAnime } from '../api/getAnime';
import loadingReducer from './loadingSlice';

const configStore = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    arrRes: arrResReducer,
    arrResCard: arrResCardReducer,
    loading: loadingReducer,
    [getAnime.reducerPath]: getAnime.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(getAnime.middleware),
});

export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
export default configStore;
