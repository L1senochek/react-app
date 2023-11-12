import { Dispatch, ReactNode, SetStateAction } from 'react';
import IAnime from '../../api/IAnime';
import IAnimeResData from '../../api/IAnimeResData';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  arrRes: IAnime | undefined;
  setArrRes: Dispatch<SetStateAction<IAnime | undefined>>;
  arrResCard: IAnimeResData | undefined;
  setArrResCard: Dispatch<SetStateAction<IAnimeResData | undefined>>;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
