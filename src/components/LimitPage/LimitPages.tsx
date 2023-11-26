'use client';
import React, { FC, useEffect, useMemo, useRef } from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';
import useOriginUrl from '@/utils/hooks/useOriginUrl';

const LimitPages: FC = () => {
  const searchValue = useAppSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );
  const limit = useAppSelector((state: RootState) => state.limit.limit);
  const dispatch = useAppDispatch();
  const limitArr = useMemo(
    () => [MIN_LIMIT_PAGES, AVG_LIMIT_PAGES, MAX_LIMIT_PAGES],
    []
  );
  const searchParams = useSearchParams();
  const limitParam = searchParams.get('limit');
  const router = useRouter();
  const limitNum = useRef<string | null>(null);
  const url = useOriginUrl();

  useEffect(() => {
    if (limitParam && limitArr.includes(+limitParam)) {
      limitNum.current = limitParam;
      dispatch(setlimit(limitParam));
    } else if (url === '') {
      router.replace(
        `/?${API_PAGE}1&${API_LIMIT}${limit}${
          searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
        }`
      );
      limitNum.current = limit;
    }
  }, [dispatch, limit, limitArr, limitParam, router, searchValue, url]);

  return (
    <div className={styles['limit-pages']}>
      <p className={styles['limit-pages__title']}>Limit pages: </p>
      {limitArr.map((limit) => (
        <Link
          key={`limit-pages${limit}`}
          className={`${styles['limit-pages__btn']} btn ${
            limitNum.current && +limitNum.current === limit
              ? styles['active']
              : ''
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
