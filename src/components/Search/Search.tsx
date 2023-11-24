'use client';
import React, { ChangeEvent, FC, useState } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import style from './search.module.scss';
import {
  PATH_INITIAL,
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
  SEARCH_VALUE,
} from '@/utils/constants/constants';
import {
  setSearchValue,
  setSearchValueLS,
} from '@/store/slices/searchValueSlice';
import { RootState } from '@/store/configStore';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useParams, useRouter } from 'next/navigation';

const Search: FC = (): JSX.Element => {
  const searchValue = useAppSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const { limitNum } = useParams();
  const router = useRouter();

  const buttonClick = async (): Promise<void> => {
    dispatch(setSearchValueLS(searchValue));

    if (!localStorage.getItem(SEARCH_VALUE)) {
      router.push(PATH_INITIAL);
    } else {
      router.push(
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
