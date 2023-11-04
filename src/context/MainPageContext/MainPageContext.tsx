import React, { FC, createContext, useEffect, useState } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';
import getAnime from '../../api/getAnime';
import IAnimeData from '../../model/api/IAnimeData';
import { SEARCH_VALUE } from '../../utils/constants/constants';

export const MainPageContext = createContext<IMainPageContextState | undefined>(
  undefined
);

export const MainPageProvider: FC<IMainPageProviderProps> = ({
  children,
}): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>((): string => {
    return localStorage.getItem(SEARCH_VALUE) || '';
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [arrRes, setArrRes] = useState<IAnimeData[]>([]);
  const localStoreValue = localStorage.getItem(SEARCH_VALUE);

  useEffect((): void => {
    (async (): Promise<void> => {
      if (localStoreValue === '' || !localStoreValue) {
        const allAnime = await getAnime();
        setArrRes(allAnime.data);
        console.log('allAnime', allAnime);
      } else if (localStoreValue) {
        const getSearchRes = await getAnime(localStoreValue);
        setArrRes(getSearchRes.data);
      }
      setIsLoading(false);
    })();
  }, [localStoreValue]);

  const contextValue: IMainPageContextState = {
    searchValue,
    setSearchValue,
    isLoading,
    setIsLoading,
    arrRes,
    setArrRes,
  };

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};
