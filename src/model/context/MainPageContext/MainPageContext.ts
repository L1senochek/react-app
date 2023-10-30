import { Dispatch, ReactNode, SetStateAction } from 'react';
import IPlanets from '../../api/IPlanets';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  arrRes: IPlanets[];
  setArrRes: Dispatch<SetStateAction<IPlanets[]>>;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
