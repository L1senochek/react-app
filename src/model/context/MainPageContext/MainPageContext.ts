import { ReactNode } from 'react';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
