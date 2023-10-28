import { ReactNode } from 'react';

export interface ISearchContextState {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export interface ISearchProviderProps {
  children: ReactNode;
}
