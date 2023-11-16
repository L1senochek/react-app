import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import IconfigStore from '../model/store/IconfigStore';
import searchValueReducer from './searchValueSlice';
import arrResReducer from './arrResSlice';
import arrResCardReducer from './arrResCardSlice';

const configStore = (): ToolkitStore<
  IconfigStore,
  AnyAction,
  [ThunkMiddleware<IconfigStore, AnyAction>]
> => {
  return configureStore({
    reducer: {
      searchValue: searchValueReducer,
      arrRes: arrResReducer,
      arrResCard: arrResCardReducer,
    },
  });
};

export default configStore;
