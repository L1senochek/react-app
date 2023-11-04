import { Dispatch, ReactNode, SetStateAction } from 'react';
import IAnimeData from '../../api/IAnimeData';
import IAnime from '../../api/IAnime';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  arrRes: IAnimeData[];
  setArrRes: Dispatch<SetStateAction<IAnimeData[]>>;
  resObj: IAnime | undefined;
  setResObj: Dispatch<SetStateAction<IAnime | undefined>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  limitPage: number;
  setLimitPage: Dispatch<SetStateAction<number>>;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
