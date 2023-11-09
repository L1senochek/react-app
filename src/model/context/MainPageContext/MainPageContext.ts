import { Dispatch, ReactNode, SetStateAction } from 'react';
import IAnime from '../../api/IAnime';

export interface IMainPageContextState {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  arrRes: IAnime | undefined;
  setArrRes: Dispatch<SetStateAction<IAnime | undefined>>;
}

export interface IMainPageProviderProps {
  children: ReactNode;
}
