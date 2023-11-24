'use client';
import React, { FC } from 'react';
import styles from './main-section.module.scss';
// import Cards from '../Cards/Cards';
// import Pagination from '../Pagination/Pagination';
import ErrorBtn from '@/components/ErrorBtn/ErrorBtn';
import LimitPages from '@/components/LimitPage/LimitPages';
// import Loading from '../Loading/Loading';
// import { useGetAnimeQuery } from '../../api/getAnime';

const MainSection: FC = (): JSX.Element => {
  // const { pageNum, limitNum, query } = useParams();
  // const { isLoading } = useGetAnimeQuery({ pageNum, limitNum, query });

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
        {/* <Cards /> */}
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default MainSection;
