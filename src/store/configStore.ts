import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import IconfigStore from '../model/store/IconfigStore';
import searchValueReducer from './searchValueSlice';
import arrResReducer from './arrResSlice';

const configStore = (): ToolkitStore<
  IconfigStore,
  AnyAction,
  [ThunkMiddleware<IconfigStore, AnyAction>]
> => {
  return configureStore({
    reducer: {
      searchValue: searchValueReducer,
      arrRes: arrResReducer,
    },
  });
};
export default configStore;
