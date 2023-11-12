import React, { ChangeEvent, FC, useContext, useState } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import './search.scss';
import {
  PATH_INITIAL,
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
  SEARCH_VALUE,
} from '../../utils/constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { IMainPageContextState } from '../../model/context/MainPageContext/MainPageContext';

const Search: FC = (): JSX.Element => {
  const { searchValue, setSearchValue } = useContext(
    MainPageContext
  ) as IMainPageContextState;
  const [isFocused, setIsFocused] = useState(false);
  const { limitNum } = useParams();
  const navigate = useNavigate();

  const buttonClick = async (): Promise<void> => {
    localStorage.setItem(SEARCH_VALUE, searchValue);
    if (!localStorage.getItem(SEARCH_VALUE)) {
      navigate(PATH_INITIAL);
    } else {
      navigate(
        `/${PAGE_PATH_PART}1/${LIMIT_PATH_PART}${limitNum}/${QUERY_PATH_PART}${searchValue}`
      );
    }
  };

  const keyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      buttonClick();
    }
  };

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const focused = isFocused ? 'focused' : '';

  return (
    <div className={`search ${focused}`}>
      <button className="search__loupe" onClick={buttonClick}>
        <IconLoupe />
      </button>
      <input
        className="search__input"
        type="search"
        placeholder="Search..."
        id="search"
        value={searchValue}
        onChange={searchChange}
        onKeyUp={keyUp}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Search;
