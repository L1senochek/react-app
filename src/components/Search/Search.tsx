'use client';
import React, { ChangeEvent, FC, useState } from 'react';
import IconLoupe from '@/components/IconLoupe/IconLoupe';
import style from './search.module.scss';
import {
  PATH_INITIAL,
  SEARCH_VALUE,
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
} from '@/utils/constants/constants';
import {
  setSearchValue,
  setSearchValueLS,
} from '@/store/slices/searchValueSlice';
import { RootState } from '@/store/configStore';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';

const Search: FC = (): JSX.Element => {
  const searchValue = useAppSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const limitNum = useAppSelector((state: RootState) => state.limit.limit);
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const buttonClick = async (): Promise<void> => {
    dispatch(setSearchValueLS(searchValue));

    if (!localStorage.getItem(SEARCH_VALUE)) {
      router.replace(PATH_INITIAL);
    } else {
      router.replace(
        `/?${API_PAGE}1&${API_LIMIT}${limitNum}&${API_SEARCH_PARAM}${searchValue}`
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
    dispatch(setSearchValue(value));
  };

  const focused = isFocused ? 'focused' : '';

  return (
    <div className={`${style['search']} ${focused}`}>
      <button className={style['search__loupe']} onClick={buttonClick}>
        <IconLoupe />
      </button>
      <input
        className={style['search__input']}
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
