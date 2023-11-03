import React, { ChangeEvent, FC, useContext } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import getSearch from '../../api/getSearch';
import './search.scss';

const Search: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);

  const buttonClick = async (): Promise<void> => {
    if (context) {
      context.setIsLoading(true);
      const getSearchRes = await getSearch(context.searchValue);
      context.setArrRes(getSearchRes.data);
      context.setIsLoading(false);
      localStorage.setItem('searchValue', context.searchValue);
    }
  };

  const keyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      buttonClick();
    }
  };

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    context?.setSearchValue(value);
  };

  return (
    <div className="search">
      <button className="search__loupe" onClick={buttonClick}>
        <IconLoupe />
      </button>
      <input
        className="search__input"
        type="search"
        placeholder="Search..."
        id="search"
        value={context?.searchValue}
        onChange={searchChange}
        onKeyUp={keyUp}
      />
    </div>
  );
};

export default Search;
