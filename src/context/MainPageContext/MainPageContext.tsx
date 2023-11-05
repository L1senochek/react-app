import React, { FC, createContext, useState } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';
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

  const contextValue: IMainPageContextState = {
    searchValue,
    setSearchValue,
  };

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};
