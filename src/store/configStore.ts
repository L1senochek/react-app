import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import arrResReducer from './arrResSlice';
import arrResCardReducer from './arrResCardSlice';

const configStore = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    arrRes: arrResReducer,
    arrResCard: arrResCardReducer,
  },
});

export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
export default configStore;
