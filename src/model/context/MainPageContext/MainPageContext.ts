import { Dispatch, ReactNode, SetStateAction } from 'react';
import IAnimeData from '../../api/IAnimeData';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  arrRes: IAnimeData[];
  setArrRes: Dispatch<SetStateAction<IAnimeData[]>>;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
