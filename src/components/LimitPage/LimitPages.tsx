'use client';
import React, { FC } from 'react';
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
} from '@/utils/constants/constants';
import styles from './limit-pages.module.scss';
import IconfigStore from '@/model/store/IconfigStore';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setlimit } from '@/store/slices/limitSlice';
import Link from 'next/link';
import { RootState } from '@/store/configStore';

const LimitPages: FC = () => {
  const searchValue = useAppSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );
  const limitNum = useAppSelector((state: RootState) => state.limit.limit);
  const dispatch = useAppDispatch();
  const limitArr = [MIN_LIMIT_PAGES, AVG_LIMIT_PAGES, MAX_LIMIT_PAGES];

  return (
    <div className={styles['limit-pages']}>
      <p className={styles['limit-pages__title']}>Limit pages: </p>
      {limitArr.map((limit) => (
        <Link
          key={`limit-pages${limit}`}
          className={`${styles['limit-pages__btn']} btn ${
            limitNum && +limitNum === limit ? styles['active'] : ''
          }`}
          href={`/?${API_PAGE}1&${API_LIMIT}${limit}${
            searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
          }`}
          onClick={() => dispatch(setlimit(limit))}
        >
          {limit}
        </Link>
      ))}
    </div>
  );
};

export default LimitPages;
