import React, { FC, createContext, useState } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';
import { SEARCH_VALUE } from '../../utils/constants/constants';
import IAnime from '../../model/api/IAnime';
import IAnimeResData from '../../model/api/IAnimeResData';

export const MainPageContext = createContext<IMainPageContextState | undefined>(
  undefined
);

export const MainPageProvider: FC<IMainPageProviderProps> = ({
  children,
}): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>((): string => {
    return localStorage.getItem(SEARCH_VALUE) || '';
  });
  const [arrRes, setArrRes] = useState<IAnime | undefined>(undefined);
  const [arrResCard, setArrResCard] = useState<IAnimeResData | undefined>(
    undefined
  );

  const contextValue: IMainPageContextState = {
    searchValue,
    setSearchValue,
    arrRes,
    setArrRes,
    arrResCard,
    setArrResCard,
  };

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};
