'use client';
import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import searchValueReducer from './slices/searchValueSlice';
import arrResReducer from './slices/arrResSlice';
import arrResCardReducer from './slices/arrResCardSlice';
import { getAnime } from '../api/getAnime';
import loadingReducer from './slices/loadingSlice';
import limitReducer from './slices/limitSlice';

const rootReducer = combineReducers({
  searchValue: searchValueReducer,
  arrRes: arrResReducer,
  arrResCard: arrResCardReducer,
  loading: loadingReducer,
  limit: limitReducer,
  [getAnime.reducerPath]: getAnime.reducer,
});

export const configStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(getAnime.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configStore>;
export type AppDispatch = AppStore['dispatch'];
export default configStore;
