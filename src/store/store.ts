import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import uncontrolledFormSlice from './slices/uncontrolledFormSlice.ts';
import reactHookFormSlice from './slices/reactHookFormSlice';
import countriesSlice from './slices/countriesSlice';

const rootReducer = combineReducers({
  uncontrolledForm: uncontrolledFormSlice.reducer,
  reactHookForm: reactHookFormSlice.reducer,
  countries: countriesSlice.reducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export default store;
