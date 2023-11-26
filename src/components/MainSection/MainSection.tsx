'use client';
import React, { FC } from 'react';
import styles from './main-section.module.scss';
import ErrorBtn from '@/components/ErrorBtn/ErrorBtn';
import LimitPages from '@/components/LimitPage/LimitPages';
import Pagination from '@/components/Pagination/Pagination';
import { useGetAnimeQuery } from '@/api/getAnime';
import { RootState } from '@/store/configStore';
import { useAppSelector } from '@/store/hooks';
import Loading from '@/components/Loading/Loading';
import IHomeProps from '@/model/app/page';
import Cards from '@/components/Cards/Cards';

const MainSection: FC<IHomeProps> = ({ searchParams }): JSX.Element => {
  const searchValue = useAppSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const { data, isLoading } = useGetAnimeQuery({
    pageNum: searchParams.page,
    limitNum: searchParams.limit,
    query: searchParams.q || searchValue,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles['main-section']}>
        <div className={styles['main-section__top']}>
          <h2 className={styles['main-section__title']}>Titles:</h2>
          <div className={styles['main-section__nav-btn']}>
            <ErrorBtn />
            <LimitPages />
          </div>
        </div>
        <Cards data={data} />
        <Pagination data={data} />
      </div>
    </>
  );
};

export default MainSection;
