import React, { FC, createContext, useEffect, useState } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';
import IPlanets from '../../model/api/IPlanets';
import getPlanets from '../../api/getPlanets';
import getSearch from '../../api/getSearch';

export const MainPageContext = createContext<IMainPageContextState | undefined>(
  undefined
);

export const MainPageProvider: FC<IMainPageProviderProps> = ({
  children,
}): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>((): string => {
    return localStorage.getItem('searchValue') || '';
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [arrRes, setArrRes] = useState<IPlanets[]>([]);
  const localStoreValue = localStorage.getItem('searchValue');

  useEffect((): void => {
    (async (): Promise<void> => {
      if (localStoreValue === '') {
        const allPlanets = await getPlanets();
        setArrRes(allPlanets.results);
        console.log(1);
      } else if (localStoreValue) {
        const getSearchRes = await getSearch(localStoreValue);
        setArrRes(getSearchRes.results);
        console.log(2);
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
