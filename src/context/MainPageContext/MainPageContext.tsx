import React, { Component, createContext } from 'react';
import {
  IMainPageContextState,
  IMainPageProviderProps,
} from '../../model/context/MainPageContext/MainPageContext';

export const MainPageContext = createContext<IMainPageContextState>({
  searchValue: '',
  setSearchValue: () => {},
  isLoading: true,
  setIsLoading: () => {},
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
    };
  }

  setSearchValue = (value: string) => {
    this.setState({ searchValue: value }, () => {
      localStorage.setItem('searchValue', value);
    });
  };

  setIsLoading = (value: boolean) => {
    this.setState({ isLoading: value });
  };

  render() {
    return (
      <MainPageContext.Provider
        value={{
          searchValue: this.state.searchValue,
          setSearchValue: this.setSearchValue,
          isLoading: this.state.isLoading,
          setIsLoading: this.setIsLoading,
        }}
      >
        {this.props.children}
      </MainPageContext.Provider>
    );
  }
}
