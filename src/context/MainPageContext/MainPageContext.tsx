import React, { FC, createContext, useEffect, useState } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';
import getAnime from '../../api/getAnime';
import IAnimeData from '../../model/api/IAnimeData';
import { MAX_LIMIT_PAGES, SEARCH_VALUE } from '../../utils/constants/constants';
import IAnime from '../../model/api/IAnime';

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
  const [resObj, setResObj] = useState<IAnime | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(MAX_LIMIT_PAGES);

  useEffect((): void => {
    (async (): Promise<void> => {
      const animeRes = await getAnime(
        localStoreValue ? localStoreValue : undefined,
        currentPage,
        limitPage
      );
      setArrRes(animeRes.data);
      setResObj(animeRes);
      setIsLoading(false);

      console.log('animeRes', animeRes);
    })();
  }, [currentPage, limitPage, localStoreValue]);

  const contextValue: IMainPageContextState = {
    searchValue,
    setSearchValue,
    isLoading,
    setIsLoading,
    arrRes,
    setArrRes,
    resObj,
    setResObj,
    currentPage,
    setCurrentPage,
    limitPage,
    setLimitPage,
  };

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};
