import React, { Component, createContext } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';
import IPlanets from '../../model/api/IPlanets';

export const MainPageContext = createContext<IMainPageContextState>({
  searchValue: '',
  setSearchValue: () => {},
  isLoading: true,
  setIsLoading: () => {},
  arrRes: [],
  setArrRes: () => {},
});

export class MainPageProvider extends Component<
  IMainPageProviderProps,
  IMainPageContextState
> {
  constructor(props: IMainPageProviderProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
      setSearchValue: this.setSearchValue,
      isLoading: true,
      setIsLoading: this.setIsLoading,
      arrRes: [],
      setArrRes: this.setArrRes,
    };
  }

  setSearchValue = (value: string): void => {
    this.setState({ searchValue: value });
    localStorage.setItem('searchValue', value);
  };

  setIsLoading = (value: boolean): void => {
    this.setState({ isLoading: value });
  };

  setArrRes = (value: IPlanets[]): void => {
    this.setState({ arrRes: value });
  };

  render = (): JSX.Element => {
    return (
      <MainPageContext.Provider
        value={{
          searchValue: this.state.searchValue,
          setSearchValue: this.setSearchValue,
          isLoading: this.state.isLoading,
          setIsLoading: this.setIsLoading,
          arrRes: this.state.arrRes,
          setArrRes: this.setArrRes,
        }}
      >
        {this.props.children}
      </MainPageContext.Provider>
    );
  };
}
