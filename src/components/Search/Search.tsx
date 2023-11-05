import React, { ChangeEvent, FC, useContext, useState } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import './search.scss';
import { PATH_INITIAL, SEARCH_VALUE } from '../../utils/constants/constants';
import { useNavigate, useParams } from 'react-router-dom';

const Search: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  const [isFocused, setIsFocused] = useState(false);
  const { pageNum, limitNum } = useParams();
  const navigate = useNavigate();

  const buttonClick = async (): Promise<void> => {
    if (context) {
      localStorage.setItem(SEARCH_VALUE, context.searchValue);
      if (!localStorage.getItem(SEARCH_VALUE)) {
        navigate(PATH_INITIAL);
      } else {
        navigate(
          `/page/${pageNum}/limit/${limitNum}/query/${context.searchValue}`
        );
      }
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
        value={context?.searchValue}
        onChange={searchChange}
        onKeyUp={keyUp}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Search;
