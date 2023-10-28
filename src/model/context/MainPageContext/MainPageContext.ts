import { ReactNode } from 'react';
import IPlanets from '../../api/IPlanets';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  arrRes: IPlanets[];
  setArrRes: (value: IPlanets[]) => void;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
