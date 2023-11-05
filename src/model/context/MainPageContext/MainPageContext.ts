import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
