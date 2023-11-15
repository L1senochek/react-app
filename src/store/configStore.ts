import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import IconfigStore from '../model/store/IconfigStore';

const configStore = (): ToolkitStore<
  IconfigStore,
  AnyAction,
  [ThunkMiddleware<IconfigStore, AnyAction>]
> => {
  return configureStore({
    reducer: {
      searchValue: searchValueReducer,
    },
  });
};
export default configStore;
