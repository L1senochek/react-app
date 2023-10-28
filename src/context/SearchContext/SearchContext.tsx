import React, { Component, createContext } from 'react';
import {
  ISearchContextState,
  ISearchProviderProps,
} from '../../model/context/SearchContext/SearchContext';

export const SearchContext = createContext<ISearchContextState>({
  searchValue: '',
  setSearchValue: () => {},
});

export class SearchProvider extends Component<
  ISearchProviderProps,
  ISearchContextState
> {
  constructor(props: ISearchProviderProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
      setSearchValue: this.setSearchValue,
    };
  }

  setSearchValue = (value: string) => {
    this.setState({ searchValue: value }, () => {
      localStorage.setItem('searchValue', value);
    });
  };

  render() {
    return (
      <SearchContext.Provider
        value={{
          searchValue: this.state.searchValue,
          setSearchValue: this.setSearchValue,
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}
